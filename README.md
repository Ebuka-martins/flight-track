# Flight Tracker: Real-Time Flight Monitoring
A sleek, modern web application built with React, TypeScript, Vite, and TailwindCSS, delivering real-time flight tracking with live updates, interactive maps, and detailed flight data, hosted on GitHub Pages.
The site can be accessed through the [link](https://ebuka-martins.github.io/flight-track/) or [Local](http://localhost:5173/flight-track/)

![front page logo](dist\assets\image\front-page.png)


## Overview
Flight Tracker is a web-based application designed to provide users with real-time flight tracking capabilities. Leveraging a modern tech stack, it offers a seamless and responsive user experience with interactive maps and comprehensive flight information. The project is built using React for dynamic UI components, TypeScript for type safety, Vite for fast development and build processes, and TailwindCSS for responsive styling. It is deployed on GitHub Pages for easy access.


## Features
- **Real-Time Flight Tracking:** Monitor flights with live updates on their status and location.
- **Interactive Maps:** Visualize flight paths and locations on dynamic, user-friendly maps.
- **Detailed Flight Information:** Access comprehensive data such as flight numbers, routes, and statuses.
- **Responsive Design:** Optimized for both desktop and mobile devices using TailwindCSS.
- **Fast Development:** Powered by Vite for rapid development and optimized builds.
- **Type-Safe Code:** Built with TypeScript to ensure robust and maintainable code.

## Tech Stack
- **React:** For building dynamic and reusable UI components.
- **TypeScript:** For type-safe JavaScript development.
- **Vite:** For fast development server and optimized production builds.
- **TailwindCSS:** For responsive and utility-first styling.
- **Lucide React:** For lightweight and customizable icons.
- **ESLint:** For code linting and maintaining code quality.
- **GitHub Pages:** For hosting the deployed application.

## Installation
To set up the project locally, follow these steps:
1. **Clone the Repository:**
```
git clone https://github.com/Ebuka-martins/flight-track.git
cd flight-tracker
```
2. **Install Dependencies:** Ensure you have Node.js installed, then run:
bash
```npm install```
3. **Run the Development Server:** Start the Vite development server:
bash
```npm run dev```
The app will be available at http://localhost:5173/flight-track/.

## Usage
- **Development:** Use ```npm run dev``` to start the development server with hot reloading.
- **Build:** Run ```npm run build``` to create a production-ready build in the ```dist``` folder.
- **Preview:** Use ```npm run preview``` to locally preview the production build.
- **Deploy:** Deploy to GitHub Pages with ```npm run deploy```, which builds the project and pushes it to the gh-pages branch.
- **Linting:** Run ```npm run lint``` to check for code quality issues using ESLint.

## Project Structure
```
flight-tracker/
├── public/
│   └── vite.svg            # Project favicon
├── src/
│   ├── App.tsx             # Main React component
│   ├── main.tsx            # Entry point for React rendering
│   └── index.css           # Global styles (TailwindCSS)
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── package.json            # Project metadata and scripts
└── README.md               # This file

```

## Deployment
The project is configured for deployment on GitHub Pages. The vite.config.ts file sets the base path to /flight-track/ to ensure correct asset loading. To deploy:

1. Build the project:
  bash
```npm run build```
2. Deploy to GitGitHub Pages:
  bash
```npm run deploy```

