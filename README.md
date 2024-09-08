# Chat Application

A real-time chat application designed and developed using a modern tech stack, offering users a smooth, engaging communication experience. This project showcases key functionalities such as user authentication, friend management, group chats, media sharing, and a powerful admin panel, making it a well-rounded solution for social interaction and real-time communication.

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
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/chat-app.git
    cd chat-app
    ```

2. Install server-side dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install client-side dependencies:
    ```bash
    cd ../client
    npm install
    ```

4. Create an `.env` file in the server folder with the following variables:
    ```bash
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-secret-key
    ```

5. Run the development server:
    - In the `server` folder, start the backend:
      ```bash
      npm run dev
      ```

    - In the `client` folder, start the frontend:
      ```bash
      npm start
      ```

6. The application will be available at `http://localhost:3000`.

## Screenshots

*Add screenshots here to highlight key features such as real-time chat, group creation, and the admin panel.*

## Contribution
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/chat-app/issues).

## License
This project is licensed under the MIT License.
