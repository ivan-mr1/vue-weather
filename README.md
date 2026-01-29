# Weather App Vue

A modern weather tracking web application built with the Vue 3 stack. This project demonstrates the implementation of a full-stack infrastructure, including secure interaction with external APIs via Serverless Functions.

**[Deploy](https://vue-weather-orcin.vercel.app/)**

---

## Tech Stack

- **Frontend**: Vue 3 (Composition API), Vite
- **State Management**: Pinia
- **Styling**: Tailwind CSS (Glassmorphism UI)
- **Networking**: Axios, Fetch API
- **Backend Layer**: Vercel Serverless Functions (Node.js)
- **Quality Control**: ESLint, Stylelint, Prettier
- **Git Hooks**: Husky (automatic pre-commit code linting)

---

## Key Features

- **Secure API Architecture**: Request proxying is implemented through the server-side. API keys are stored in server-side environment variables, preventing sensitive data leaks to the frontend.
- **Dynamic UI**: The application background and visual elements change dynamically based on temperature and weather conditions (immersive experience).
- **Performance & SEO**:
  - High Google Page Speed scores.
  - Optimized build via Vite.
  - Usage of modern image formats (WebP).
- **Server-side Caching**: API response caching is implemented at the Vercel Edge Network level for near-instant loading on repeated requests.
- **Glassmorphism Design**: The interface features a modern aesthetic with translucent elements and a fully responsive layout.

---

## Preview & Performance

- **Google Page Speed**:
  <img alt="Google Page Speed" src="https://github.com/user-attachments/assets/8705265a-143f-4c5a-bc53-f43ad60fc304" />

- **Screenshot**:
  <img width="1900" height="805" alt="Screenshot" src="https://github.com/user-attachments/assets/8dd58f44-2111-41c3-9777-1422b49c9ad0" />
