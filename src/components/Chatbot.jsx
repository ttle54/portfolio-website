import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm an AI assistant. I can answer questions about this portfolio, experience, and certifications. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Replace with your actual AWS API Gateway endpoint from .env
      const apiUrl = import.meta.env.VITE_AWS_CHAT_API;
      
      if (!apiUrl || apiUrl.includes('your-api-gateway-id')) {
         // Mock response if API is not configured
         setTimeout(() => {
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: "AWS Backend is not completely configured yet. Please configure `VITE_AWS_CHAT_API` with your actual API Gateway URL in your `.env` file to connect to Bedrock."
            }]);
            setIsLoading(false);
         }, 1000);
         return;
      }

      // Bedrock Converse API strictly requires the first message to be from 'user'.
      // We slice off the hardcoded initial assistant greeting to prevent ValidationException.
      const historyToSend = newMessages.slice(1).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: historyToSend }),
      });

      if (!response.ok) {
        let errorMsg = `Server response was ${response.status}`;
        try {
          const errData = await response.json();
          if (errData && errData.reply) {
            errorMsg = errData.reply;
          } else if (errData && errData.message) {
            errorMsg = errData.message;
          }
        } catch (e) {
          // Fallback if the body isn't JSON
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || "No reply found" }]);
    } catch (error) {
      console.error("Error fetching from bot:", error);
      
      const isCustomError = error.message.includes('Server response was') || error.message.includes('Sorry, my backend hit a snag talking to Bedrock') || error.message.includes('Invalid JSON format') || error.message.includes('Missing \'message\' field');
      const displayMessage = isCustomError 
        ? error.message 
        : "Sorry, I encountered an error connecting to the backend. Please try again later.";

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: displayMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="chatbot-status"></span>
              AI Assistant
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role === 'user' ? 'user' : 'bot'}`}>
                {msg.role === 'assistant' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {isLoading && (
              <div className="message bot typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <div className="chatbot-form">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="chatbot-submit"
                disabled={!input.trim() || isLoading}
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
      
      {!isOpen && (
        <div className="chatbot-toggle-wrapper">
          <div className="chatbot-suggestion" onClick={() => setIsOpen(true)}>
            Got questions? Chat with my AI twin! 🤖
          </div>
          <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
            <MessageSquare size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
