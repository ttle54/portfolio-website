# AI Platform Engineer Portfolio

A modern, highly interactive AI platform engineer portfolio website designed to showcase infrastructure expertise, CI/CD pipelines, and cloud-native projects with a "Vibrant Tech" aesthetic.

## 🚀 Features
- **Vibrant Tech Aesthetic**: Glassmorphism UI, breathing neon gradients, and a stark dark mode.
- **Interactive 3D Elements**: Project cards dynamically tilt and rotate tracking the user's mouse position (`react-parallax-tilt`).
- **Data Visualization**: Technical proficiencies are mapped via interactive, data-driven bar charts (`recharts`).
- **Kinetic Animations**: Staggered text entrances, scroll-driven parallax effects, and smooth hover scaling (`framer-motion`).
- **Custom Magnetic Cursor**: A tailored visual cursor that grows and shifts seamlessly when hovering over interactive elements.
- **Fully Responsive**: Optimized for seamless viewing across mobile, tablet, and desktop devices.

## 🛠 Tech Stack
- **Framework**: React 19 (via Vite)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Keyframe Animations)
- **Icons**: Lucide React
- **Animations & 3D**: Framer Motion, React Parallax Tilt
- **Charts**: Recharts

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ttle54/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## 📂 Project Structure
- `src/components/`: Contains all React UI components (Hero, About, Skills, Projects, Experience, CustomCursor).
- `src/index.css`: Global design system variables, breathing background gradients, and typography.
- `src/App.jsx`: Main assembly file connecting all components.
