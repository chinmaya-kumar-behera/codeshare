
# CodeShare Website Clone

This project is a clone of the popular CodeShare website, allowing users to collaborate on code in real-time.

![image](https://github.com/chinmaya-kumar-behera/codeshare/assets/101429530/dedab3a8-dc1c-4b0f-b0a1-4367efee1eeb)


## Features

- Real-time code collaboration.
- Syntax highlighting for various programming languages. (like JavaScript and Python)
- Code sharing with unique URLs.
- Responsive design for mobile and desktop devices.

## Technologies Used

- React.js
- Node.js
- Express.js
- WebSocket (Socket.io)
- MongoDB
- Monaco Editor
- Tailwind CSS

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/codeshare-clone.git

   ```

   This project folder consists of two folders:

      web: For the React application.
      service: For managing the Node server.
   
   
   Open both folder directories in different terminals.
   
   #Steps to Run the React Web Application
   
   Step 1: Move to the web directory
   
      - cd web
        
   Step 2: Install the Node modules

      - npm install
   
  
   Step 3: Set Environmental Variables
     - Add the following environment variables in the web directory:
      
      REACT_APP_BACKEND_BASE_URL = http://localhost:5000
      REACT_APP_BASE_WEB_URL = http://localhost:3000

        note : change the urls in case you are deploying on any server

   2. #Start the server
      - To start the server run command "npm start"
     
   
   # Steps to Run the Node Server
   
   Step 1: Move to the service directory

      cd ../service

   Step 2: Install the Node modules

      npm install

   Step 3: Set the environmental variables

      MONGO_URL = your mongodb url ( local or remote )
      PORT = 5000
      WEB_BASE_URL = http://localhost:3000

   Step 4: Start the Server

      npm start

   And your CodeSHare Web app is ready to rock.


   
   

   
   







   
