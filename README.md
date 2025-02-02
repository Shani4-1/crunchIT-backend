# crunchIT Backend

## Overview
crunchIT is a basic calculator application with backend functionality built using Express.js. This backend supports operations like addition, subtraction, multiplication, and division, along with user authentication and basic data management.

---

## Features
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division.
- **User Authentication**: Secure login and authentication using JWT.
- **Database Integration**: Persistent storage of user data and calculator history.
- **Scalable Architecture**: Organized code structure for easy maintenance and expansion.

---

## Technologies Used
- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **Database**: MongoDB (with Mongoose) or PostgreSQL (with Sequelize).
- **Authentication**: JWT for secure token-based authentication.
- **Environment Management**: dotenv for managing environment variables.
- **Development Tools**: Nodemon, morgan, and eslint for efficient development.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/crunchIT-backend.git
   cd crunchIT-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   DATABASE_URL=<your-database-url>
   JWT_SECRET=<your-secret-key>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The server will run at `http://localhost:3000`.

---

## API Endpoints
### Arithmetic Operations
- **POST** `/api/calculate`
  - Request Body:
    ```json
    {
      "operation": "add",
      "num1": 10,
      "num2": 5
    }
    ```
  - Response:
    ```json
    {
      "result": 15
    }
    ```

### User Authentication
- **POST** `/api/register`
  - Request Body:
    ```json
    {
      "username": "example",
      "password": "password123"
    }
    ```
- **POST** `/api/login`
  - Request Body:
    ```json
    {
      "username": "example",
      "password": "password123"
    }
    ```

---

## Project Structure
```
/project-root
├── /config          # Database and environment configuration
├── /controllers     # Business logic for API endpoints
├── /models          # Database models/schema
├── /routes          # API route definitions
├── /middlewares     # Custom middleware
├── /public          # Static files (if applicable)
├── /utils           # Helper functions
├── server.js        # Entry point for the app
└── README.md        # Project documentation
```

---

## License
This project is licensed under the MIT License.

