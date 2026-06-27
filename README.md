# Parth Jivani - Personal Portfolio

A modern, responsive, and animated personal portfolio website built with React and Vite.

## 🚀 Features

- **Responsive Design**: Built with Bootstrap and custom CSS for a seamless experience across all devices.
- **Dark/Light Mode**: User-preference based theme toggling with localStorage persistence.
- **Smooth Animations**: Integrated with Framer Motion for elegant page transitions and scroll animations.
- **Contact Form**: Functional contact form powered by EmailJS.
- **Modern Tech Stack**: Fast development and optimized production builds with Vite.

## 🛠️ Technologies Used

- **Frontend Framework**: React 19, React Router DOM
- **Styling**: Bootstrap, Custom CSS
- **Animations**: Framer Motion
- **Tooling**: Vite, ESLint
- **Utilities**: EmailJS (Contact form), libphonenumber-js, react-phone-input-2

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
   ```bash
   cd "Parth Jivani"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`.

## 📂 Project Structure

```text
src/
├── components/
│   ├── pages/       # React components for pages (Home, About, Experience, Projects, ContactMe)
│   └── styles/      # Component-specific styles
├── App.jsx          # Main application layout, theme handling, and routing
├── main.jsx         # React application entry point
├── App.css          # Application-level styles
└── index.css        # Global styles and variables
```

## 📝 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the application for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.
