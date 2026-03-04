# Step-by-Step AWS Infrastructure Guide for Bedrock Chatbot

This guide will walk you through setting up the serverless backend required to power your React chatbot using Amazon Bedrock and **Amazon Nova Micro** (the absolute cheapest and fastest model available).

---

## 1. Requesting Model Access in Amazon Bedrock
*Update: AWS recently retired the manual "Model access" page! Serverless Foundation models are now automatically enabled when first invoked.*

1.  Log in to the **AWS Management Console**.
2.  Make sure you are in a region that supports Bedrock (e.g., `us-east-1` N. Virginia or `us-west-2` Oregon). Note your region; you will build everything else here.
3.  In the search bar, type **Bedrock** and open the Amazon Bedrock console.
4.  In the left navigation pane, under **Foundation models**, click **Model catalog**.
5.  Search for or locate **Amazon Nova Micro** and click on it.
6.  Because it's a first-party Amazon model, you generally do NOT need to fill out a use-case form like you do for Anthropic models.
7.  The model will be fully enabled the first time your Lambda function invokes it.

---

## 2. Creating the IAM Role (Permissions)
Your Lambda function needs permission to talk to Bedrock and write logs.

1.  In the AWS Console search bar, type **IAM** and open the IAM console.
2.  In the left navigation, click **Roles**, then click **Create role**.
3.  **Trusted entity type**: Select **AWS service**.
4.  **Service or use case**: Choose **Lambda** from the dropdown. Click **Next**.
5.  **Add permissions**:
    *   Search for `AWSLambdaBasicExecutionRole` and check the box next to it.
6.  Click **Next**, give the role a name (e.g., `PortfolioChatbotLambdaRole`), and click **Create role**.
7.  Now, find that role you just created in the list and click deeply on its name.
8.  In the *Permissions* tab, click the **Add permissions** dropdown -> **Create inline policy**.
9.  Click the **JSON** tab and paste the following:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "BedrockInvoke",
            "Effect": "Allow",
            "Action": [
                "bedrock:InvokeModel"
            ],
            "Resource": "*"
        }
    ]
}
```
10. Click **Next**, name the policy (e.g., `BedrockInvokePolicy`), and click **Create policy**.

---

## 3. Creating the AWS Lambda Function
This is the "brain" that receives messages from your website and passes them to Bedrock.

1.  In the AWS search bar, type **Lambda** and navigate there.
2.  Click **Create function**.
3.  Choose **Author from scratch**.
    *   **Function name**: `PortfolioChatbotLogic`
    *   **Runtime**: `Node.js 20.x` (or 18.x)
4.  Expand **Change default execution role**:
    *   Choose **Use an existing role**.
    *   Select the role you created in Step 2 (`PortfolioChatbotLambdaRole`).
5.  Click **Create function**.
6.  Scroll down to the **Code source** section. Replace the contents of `index.mjs` with the following code:

```javascript
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

// Hardcode your region here!
const client = new BedrockRuntimeClient({ region: "us-east-1" });

export const handler = async (event) => {
    // API Gateway passes the request body as a stringified JSON
    let body;
    try {
        body = JSON.parse(event.body);
    } catch(err) {
        return { statusCode: 400, body: JSON.stringify({ message: "Invalid JSON format" }) };
    }
  
    const userMessage = body.message;
    if (!userMessage) {
        return { statusCode: 400, body: JSON.stringify({ message: "Missing 'message' field" }) };
    }

    // THIS IS YOUR SYSTEM PROMPT: Put your resume data here!
    const SYSTEM_PROMPT = `You are a helpful AI assistant for Tony Le, a DevOps Engineer transitioning into AI. 
Answer questions from recruiters based ONLY on this information:
- Name: Tony Le
- Top Skills: AWS, Terraform, automation, Generative AI.
- Experience: 7+ years in scalable, secure infrastructure.
- Certifications: AWS Certified AI Practitioner.
If they ask something not in this data, say "I don't have that specific detail, but you can reach out to Tony directly!" Be concise.`;

    // Format the prompt for Amazon Nova models (Converse API format)
    const payload = {
        messages: [
            {
                role: "user",
                content: [{ text: userMessage }]
            }
        ],
        system: [{ text: SYSTEM_PROMPT }],
        inferenceConfig: {
            maxTokens: 500
        }
    };

    try {
        const command = new InvokeModelCommand({
            modelId: "amazon.nova-micro-v1:0",
            contentType: "application/json",
            accept: "application/json",
            body: JSON.stringify(payload)
        });

        const response = await client.send(command);
        
        // AWS SDK v3 returns a Uint8Array buffers, so we must decode it
        const decodedResponseBody = new TextDecoder().decode(response.body);
        const responseBody = JSON.parse(decodedResponseBody);
        
        // Extracting response from Nova format
        const botReply = responseBody.output.message.content[0].text;

        // Ensure we format the response back to your React app exactly as it expects
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ reply: botReply })
        };
        
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ reply: "Sorry, my backend hit a snag talking to Bedrock." })
        };
    }
};
```
7.  Click the grey **Deploy** button above the code editor to save the changes.
8.  *Important Note*: On the function's main page, go to the **Configuration** tab, then **General configuration**, click **Edit**. Change the **Timeout** from 3 seconds to **15 seconds** (sometimes LLM calls take longer than 3 seconds). Save.

---

## 4. Setting up API Gateway (The trigger)
This exposes your Lambda function securely to the internet so your front-end can reach it.

1.  In the AWS search bar, type **API Gateway**.
2.  Scroll down to **HTTP API** and click **Build** (HTTP APIs are cheaper and simpler than REST APIs).
3.  **Integrations**: Click **Add integration**, select **Lambda** from the dropdown, and choose your `PortfolioChatbotLogic` function.
4.  **API name**: `PortfolioChatbotAPI`
5.  Click **Next**.
6.  **Configure routes**:
    *   **Method**: `POST`
    *   **Resource path**: `/chat`
    *   **Integration target**: (Should already be set to your Lambda)
7.  Click **Next** (leave Stage as `$default` -> click Next), then click **Create**.
8.  **Setup CORS (Critical Step!)**:
    *   In the left-hand menu of your new API, click **CORS**.
    *   Click the **Configure** button.
    *   **Access-Control-Allow-Origins**: Type `https://ttle54.github.io` and click Add (also add `http://localhost:5173` for your local testing!).
    *   **Access-Control-Allow-Methods**: Select `POST` and `OPTIONS`.
    *   **Access-Control-Allow-Headers**: Type `content-type` and click Add.
    *   Click **Save**.
9.  **Get your URL**:
    *   In the left menu, click **API: PortfolioChatbotAPI**.
    *   You will see an **Invoke URL** (e.g., `https://xyz123.execute-api.us-east-1.amazonaws.com`).
    *   Your full address for the `.env` file will be the Invoke URL + your route: `https://xyz123.execute-api.us-east-1.amazonaws.com/chat`.

---

## Final Step
Take the URL from Step 4.9, paste it into your local `.env` file as `VITE_AWS_CHAT_API`, and test the chatbot on your local site (`npm run dev`)!
