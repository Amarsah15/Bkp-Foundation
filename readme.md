# Basti Ki Pathshala Foundation - Backend API

A Node.js backend API for managing volunteers and interns registration for Basti Ki Pathshala Foundation.

## 🚀 Features

- **User Registration**: Allow volunteers and interns to register with the foundation
- **Admin Access**: View all registered users (admin-only access with secret key)
- **Secure**: Password hashing with bcrypt
- **Modern**: Built with ES6+ modules and async/await

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Admin secret key verification
- **Password Security**: bcryptjs for hashing
- **Environment**: dotenv for configuration

## 📁 Project Structure
```

Bkp-Foundation/
├── package.json
├── index.js \# Main application entry point
├── models/
│ └── User.js \# User data model
├── controllers/
│ └── user.controller.js \# User business logic
├── middleware/
│ └── auth.middleware.js \# Admin authentication
├── routes/
│ └── user.routes.js \# API routes
├── config/
│ └── db.js \# Database connection
└── README.md

```

## ⚡ Quick Start

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB database
- npm or yarn

### Installation

1. **Clone the repository**
```

git clone https://github.com/Amarsah15/Bkp-Foundation.git
cd Bkp-Foundation

```

2. **Install dependencies**
```

npm install

```

3. **Environment Setup**

Create a `.env` file in the root directory:
```

MONGO_URI=your_mongodb_connection_string
ADMIN_SECRET=your_super_secret_admin_key
PORT=8000

```

4. **Start the server**
```

# Development mode

npm run dev

# Production mode

npm start

```

The server will start on `http://localhost:8000`

## 📚 API Documentation

### Base URL
```

Local: http://localhost:8000/api/v1/users
Production: https://your-deployed-url.com/api/v1/users

```

### Endpoints

#### 1. Register User
Register a new volunteer or intern.

- **URL**: `POST /register`
- **Access**: Public
- **Body**:
```

{
"name": "John Doe",
"email": "john@example.com",
"password": "securepassword123",
"role": "volunteer" // or "intern"
}

```
- **Success Response**:
```

{
"message": "User registered successfully",
"user": {
"id": "user_id",
"name": "John Doe",
"email": "john@example.com",
"role": "volunteer"
}
}

```

#### 2. Get All Users (Admin Only)
Retrieve a list of all registered users.

- **URL**: `GET /allUsers`
- **Access**: Admin only
- **Headers**:
```

x-admin-key: your_admin_secret_key

```
- **Success Response**:
```

{
"success": true,
"message": "Users fetched successfully",
"users": [
{
"id": "user_id",
"name": "John Doe",
"email": "john@example.com",
"role": "volunteer"
}
]
}

```

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt before storage
- **Admin Protection**: Admin endpoints protected with secret key verification
- **Data Validation**: Input validation for all required fields
- **Password Exclusion**: Passwords are never returned in API responses

## 🧪 Testing

### Using cURL

**Register a volunteer:**
```

curl -X POST http://localhost:8000/api/v1/users/register \
-H "Content-Type: application/json" \
-d '{
"name": "Amarnath Kumar",
"email": "amarnath.kumar152003@gmail.com",
"password": "password123",
"role": "intern"
}'

```

**Get all users (Admin):**
```

curl -X GET http://localhost:8000/api/v1/users/allUsers \
-H "x-admin-key: your_admin_secret_key"

```

### Using Postman

Import the following collection or create requests manually:

1. **POST** `{{baseURL}}/register` - Register user
2. **GET** `{{baseURL}}/allUsers` - Get all users (with admin header)

## 📋 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | Yes |
| `ADMIN_SECRET` | Secret key for admin access | Yes |
| `PORT` | Server port (default: 8000) | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Amarnath Kumar**
- GitHub: [@Amarsah15](https://github.com/Amarsah15)


---
**Built with ❤️ for Basti Ki Pathshala Foundation**
