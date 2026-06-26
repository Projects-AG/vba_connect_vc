# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# VBA Connect - Video & Notification Frontend

## Overview

This frontend provides reusable React components for Video Calling and Notification Management. It consumes the backend APIs and can be plugged into any React application.

---

## Tech Stack

* React
* Vite
* Tailwind CSS
* LiveKit React Components

---

## Project Structure

```
src/

video/
├── components/
├── config/
├── hooks/
├── pages/
├── services/
├── theme/
└── index.js

notification/
├── components/
├── hooks/
├── pages/
├── services/
└── index.js
```

---

## Installation

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the frontend folder.

Example

```
VITE_API_URL=http://localhost:3000
```

---

## Video Module

Includes:

* Join Screen
* Video Conference
* Participant Tiles
* Control Bar
* Theme Configuration
* Reusable Hook
* API Service

Flow

```
Join Screen
      ↓
Generate Token
      ↓
LiveKit Room
      ↓
Video Conference
      ↓
Leave Room
      ↓
Back to Join Screen
```

---

## Notification Module

Includes:

* Notification Center
* Auto Refresh
* Clear All
* Timestamp Display
* Reusable Hook
* API Service

---

## Features

* Reusable React Components
* LiveKit Video UI
* Notification Center
* Auto Refresh Notifications
* Tailwind CSS UI
* Modular Architecture
* Configurable Theme
* Reusable Exports

---

## Folder Architecture

```
Page
   ↓
Hooks
   ↓
Services
   ↓
Backend APIs
```

---

## Future Improvements

* Dark Mode
* Toast Notifications
* Sound Alerts
* Real-time Notifications using WebSockets
* Screen Sharing Enhancements
* Chat Integration
