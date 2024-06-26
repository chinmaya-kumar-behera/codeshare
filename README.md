
# CodeShare Website Clone

This project is a clone of the popular CodeShare website, allowing users to collaborate on code in real-time.

[See the Site Live] (https://codeshare.chinmaya.vercel.app)

![image](https://github.com/chinmaya-kumar-behera/codeshare/assets/101429530/dedab3a8-dc1c-4b0f-b0a1-4367efee1eeb)


## Features

- Real-time code collaboration.
- User authentication mechanisms including login and signup functionalities.
- User-centric dashboard providing detailed insights into code sharing history and activity.
- ’view-only’ mode feature allowing users to restrict access to shared code to
- Download the codes as text file.
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

Clone the repository:

   ```bash
   git clone https://github.com/your-username/codeshare-clone.git

   ```

   This project folder consists of two folders:

      web: For the React application.
      service: For managing the Node server.
   
   Open both folder directories in different terminals.
   
# Steps to Run the React Web Application
   
   Step 1: Move to the web directory

   ```bash
   cd web
   ```

        
   Step 2: Install the Node modules
   ```bash
      - npm install
   ```
  
   Step 3: Set Environmental Variables
     - Add the following environment variables in the web directory:
      
      REACT_APP_BACKEND_BASE_URL = http://localhost:5000
      REACT_APP_BASE_WEB_URL = http://localhost:3000

        note : change the urls in case you are deploying on any server

   2. Start the server
      - To start the server run command "npm start"
     

   
# Steps to Run the Node Server
   
   Step 1: Move to the service directory
   ```bash
      cd ../service
   ```

   Step 2: Install the Node modules
   ```bash
      npm install
   ```
   Step 3: Set the environmental variables

      MONGO_URL = your mongodb url ( local or remote )
      PORT = 5000
      WEB_BASE_URL = http://localhost:3000

   Step 4: Start the Server
   ```bash
      npm start
   ```
   And that's all.  Now your CodeShare Web-App is ready. ( Happy Coding )


# Deployment
This portfolio site is deployed using Vercel. Vercel provides a seamless deployment experience for static sites and offers features like continuous deployment and custom domain support.

### To deploy your own version of this site using Vercel, follow these steps:

- Sign up for a Vercel account if you haven't already.
- Install the Vercel CLI by running npm install -g vercel.
- Navigate to the root directory of your project in the terminal.
- Run the command vercel login and follow the prompts to log in to your Vercel account.
- Run the command vercel --prod to deploy your site to production.
- Your site will be deployed to a unique URL provided by Vercel, such as https://your-project-name.vercel.app.
   

   
   







   
