# VBA Connect - Video & Notification Backend

## Overview

This backend provides a reusable communication layer built with **NestJS** and **LiveKit OSS**. It exposes REST APIs for video communication and notification management so they can be integrated into any frontend application.

---

## Tech Stack

* NestJS
* TypeScript
* LiveKit OSS
* Swagger
* Class Validator
* Class Transformer

---

## Project Architecture

```
src/

video/
├── controller/
├── service/
├── model/
├── dto/
└── video.module.ts

notifications/
├── controller/
├── service/
├── model/
├── dto/
└── notification.module.ts
```

Architecture Flow

```
View
   ↓
Controller
   ↓
Service
   ↓
Model
   ↓
LiveKit / Data Source
```

---

## Installation

```bash
npm install
```

---

## Run Development Server

```bash
npm run start:dev
```

Backend runs on:

```
http://localhost:3000
```

---

## LiveKit Server

Start the LiveKit server before using the Video APIs.

```bash
livekit-server.exe --config livekit.yaml
```

Default LiveKit URL

```
http://localhost:7880
```

---

## Swagger Documentation

```
http://localhost:3000/api
```

---

## Video APIs

### Create Room

```
POST /video/create-room
```

Request

```json
{
  "roomName": "meeting-001"
}
```

---

### Generate Token

```
POST /video/generate-token
```

Request

```json
{
  "roomName": "meeting-001",
  "participantName": "Nityam"
}
```

---

### Get Participants

```
GET /video/participants/:roomName
```

---

### End Room

```
DELETE /video/end-room/:roomName
```

---

## Notification APIs

### Create Notification

```
POST /notifications/notify
```

---

### Get Notifications

```
GET /notifications
```

---

### Clear Notifications

```
DELETE /notifications
```

---

## Features

* Reusable Video Communication APIs
* LiveKit Integration
* JWT Token Generation
* Room Management
* Notification Dispatch APIs
* Swagger Documentation
* Validation
* Error Handling
* Production Layered Architecture

---

## Environment Variables

Create a `.env` file inside the backend folder.

Example:

```
PORT=3000

LIVEKIT_HOST=http://localhost:7880

LIVEKIT_API_KEY=devkey

LIVEKIT_API_SECRET=myverylongsecretkey12345678901234567890
```

---

## Future Improvements

* Persistent notification storage
* Authentication & Authorization
* WebSocket notification delivery
* Multi-provider video support (Agora / Twilio / 100ms)
* Unit and Integration Tests
