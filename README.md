# Real-Time Chat Application

A real-time chat application designed and developed using a modern tech stack, offering users a smooth, engaging communication experience. This project showcases key functionalities such as user authentication, friend management, group chats, media sharing, and a powerful admin panel, making it a well-rounded solution for social interaction and real-time communication.

## Table of Contents

- [Features](#features)
  - [User Features](#user-features)
  - [Admin Panel Features](#admin-panel-features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [License](#license)

## Features

### User Features
- **Registration & Authentication**:
  - Users can register by providing a photo, name, bio, unique username, and password.
  - Secure login using a username and password.

- **Real-Time Messaging**:
  - Send and receive messages in real time with visible timestamps.
  - Typing indicators to show when friends are composing messages.

- **Friend Management**:
  - Search for users and send/receive friend requests.
  - Notifications for incoming friend requests and messages.

- **Group Chats**:
  - Create and customize groups with a minimum of 3 members.
  - Join and leave groups as desired.

- **Media Sharing**:
  - Send images, documents, videos, and audio files seamlessly within chats.

- **Online/Offline Status**:
  - View friends' availability status in real time.

### Admin Panel Features
- **User & Group Management**:
  - Search for users and groups.
  - View detailed analytics on users, groups, and messages.

- **Analytics & Reports**:
  - Graphical representation of total users, total messages, and the number of groups.
  - Message activity graphs (single messages vs. group messages).

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.IO
- **Authentication**: JWT

## Setup

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or on a remote server

### Installation

1. Install client-side dependencies:
    ```bash
    git clone https://github.com/Nur-Adnan/MERN-Stack-Chat-App-Frontend.git
    npm install
    ```

2. Install server-side dependencies:
    ```bash
    git clone https://github.com/Nur-Adnan/MERN-Stack-Chat-App-Backend.git
    npm install
    ```

3. Create an `.env` file in the client folder with the following variables:
    ```bash
    VITE_SERVER=your-server-url
    ```

4. Create an `.env` file in the server folder with the following variables:
    ```bash
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-secret-key
    ADMIN_SECRET_KEY=your-admin-secret-key
    NODE_ENV=your-environment
    CLIENT_URL=your-client-url
    CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    ```

5. Run the development server:
    - In the `server` folder, start the backend:
      ```bash
      npm run dev
      ```

    - In the `client` folder, start the frontend:
      ```bash
      npm run dev
      ```

6. The application will be available at `http://localhost:5173`.

## Screenshots

![image](https://github.com/user-attachments/assets/a2483be3-7bf9-4a20-bf64-262a65fc293d)
![image](https://github.com/user-attachments/assets/687488ff-22c5-4c5e-a1a4-2d0be0a36be6)
![image](https://github.com/user-attachments/assets/551e717c-d7c4-41a5-9d81-f8d9aaeb4d5a)
![image](https://github.com/user-attachments/assets/a11779d0-635a-4969-84f2-4d57b57f05d2)
![image](https://github.com/user-attachments/assets/e2692cb9-7865-4366-97b4-43ac5c2e1db0)
![image](https://github.com/user-attachments/assets/1207331f-286d-4091-b823-266506dbf52e)
![image](https://github.com/user-attachments/assets/6f46bb48-6ff5-4ff6-b801-d522d143ce6a)
![image](https://github.com/user-attachments/assets/87b986f5-4f20-4571-87f6-6c5eadf1e27e)
Admin
![image](https://github.com/user-attachments/assets/22768e82-b166-4d5c-bb56-c596bdbf644c)
![image](https://github.com/user-attachments/assets/0aaab633-b24d-4d04-884e-9dc6b6773e8f)
![image](https://github.com/user-attachments/assets/87e677c2-77e5-4f25-84b5-e8c2f056ced2)

## License

This project is licensed under the MIT License.
