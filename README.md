### Steps to Start Your Backend and Frontend Servers

1. **Navigate to the backend directory:**
   Open a terminal and use the following command to go to the backend:
   ```bash
   cd Backend
   ```

2. **Create the `config.env` file:**
   In the `backend/config` folder, create a file named `config.env` and add the following data to it:
   ```env
   PORT = 5000
   MONGO_URI = ""
   JWT_SECRET = ""
   SMPT_HOST = ""
   SMPT_PORT = 2525
   SMPT_USER = ""
   SMPT_PASSWORD = ""
   MY_MAIL = ""
   CLOUDINARY_API_KEY = ""
   CLOUDINARY_API_SECRET = ""
   CLOUDINARY_CLOUD_NAME = ""
   ```

3. **Install backend dependencies and run the server:**
   In the terminal, execute the following commands to install dependencies and start the backend:
   ```bash
   npm install
   npm run dev
   ```

4. **Navigate to the frontend directory:**
   Open a new terminal and navigate to the frontend directory using the command:
   ```bash
   cd PortfolioFrontend
   ```

5. **Install frontend dependencies and start the frontend:**
   In the terminal, execute the following commands to install dependencies and start the frontend:
   ```bash
   npm install
   npm run dev
   ```

Now your backend and frontend should be running!