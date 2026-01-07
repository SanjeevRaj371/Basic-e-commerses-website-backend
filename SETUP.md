# Backend Setup Guide

This guide will walk you through setting up the backend server and database for the E-commerce platform.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (Local installation or MongoDB Atlas account) - [Download here](https://www.mongodb.com/try/download/community) or [Sign up for Atlas](https://www.mongodb.com/cloud/atlas/register)
- **npm** (comes with Node.js) or **yarn**

## Step-by-Step Setup

### Step 1: Install Dependencies

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install all required packages:
   ```bash
   npm install
   ```

### Step 2: Set Up MongoDB Database

You have two options for MongoDB:

#### Option A: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (choose the FREE tier)
4. Create a database user:
   - Go to "Database Access" → "Add New Database User"
   - Choose "Password" authentication
   - Create a username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
5. Whitelist your IP address:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (for development) or add your specific IP
6. Get your connection string:
   - Go to "Clusters" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

#### Option B: Local MongoDB

1. Download and install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   - **Windows**: MongoDB should start automatically as a service
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`
3. Your connection string will be: `mongodb://localhost:27017/ecommerce`

### Step 3: Configure Environment Variables

1. Create a `.env` file in the backend directory:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and update the following variables:

   ```env
   NODE_ENV=development
   PORT=5000
   
   # Replace with your MongoDB connection string
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   # OR for local: mongodb://localhost:27017/ecommerce
   
   # Generate a strong random string for JWT_SECRET
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   JWT_EXPIRE=30d
   ```

   **Important Notes:**
   - Replace `username` and `password` in MONGO_URI with your MongoDB credentials
   - Replace `cluster.mongodb.net` with your actual cluster URL
   - Change `JWT_SECRET` to a strong random string (you can generate one using: `openssl rand -base64 32`)

### Step 4: Verify Database Connection

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. You should see:
   ```
   MongoDB Connected: [your-cluster-url]
   Server running in development mode on port 5000
   ```

3. If you see connection errors:
   - Check your MONGO_URI in `.env`
   - Verify MongoDB is running (if using local)
   - Check your network access settings (if using Atlas)
   - Ensure your IP is whitelisted (if using Atlas)

### Step 5: Test the API

1. The server should be running on `http://localhost:5000`

2. Test the health endpoint:
   ```bash
   curl http://localhost:5000/api/health
   ```
   Or open in browser: `http://localhost:5000/api/health`

3. You should see:
   ```json
   {
     "status": "OK",
     "message": "Server is running"
   }
   ```

### Step 6: Create Your First Admin User

You can create an admin user through the API or directly in MongoDB:

#### Option A: Through API (Recommended)

1. Register a user:
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Admin User",
       "email": "admin@example.com",
       "password": "admin123"
     }'
   ```

2. Update the user role to admin in MongoDB:
   - Connect to your MongoDB database
   - Find the user and update:
     ```javascript
     db.users.updateOne(
       { email: "admin@example.com" },
       { $set: { role: "admin" } }
     )
     ```

#### Option B: Using MongoDB Compass or CLI

1. Connect to your database
2. Navigate to the `users` collection
3. Insert a new document:
   ```json
   {
     "name": "Admin User",
     "email": "admin@example.com",
     "password": "$2a$10$...", // Hashed password
     "role": "admin"
   }
   ```

   **Note:** For Option B, you'll need to hash the password first. It's easier to use Option A and then update the role.

## API Endpoints

Once set up, your API will be available at `http://localhost:5000/api`

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)
- `PUT /api/auth/profile` - Update profile (Protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order (Protected)
- `GET /api/orders/me` - Get user orders (Protected)
- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/:id` - Get order details (Protected)
- `PUT /api/orders/:id` - Update order status (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user by ID (Admin)
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)

## Troubleshooting

### MongoDB Connection Issues

**Error: "MongoNetworkError"**
- Check your internet connection (for Atlas)
- Verify your IP is whitelisted in Atlas
- Check firewall settings

**Error: "Authentication failed"**
- Verify username and password in MONGO_URI
- Ensure database user has correct permissions

**Error: "Connection timeout"**
- Check if MongoDB service is running (local)
- Verify connection string format
- Check network connectivity

### Port Already in Use

If port 5000 is already in use:
1. Change PORT in `.env` file
2. Or stop the process using port 5000:
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:5000 | xargs kill
   ```

### JWT Token Issues

- Ensure JWT_SECRET is set in `.env`
- Use a strong, random secret (at least 32 characters)
- Don't commit `.env` to version control

## Next Steps

1. **Start the frontend**: Navigate to the frontend directory and run `npm run dev`
2. **Test the full application**: Register a user, create products, and place orders
3. **Set up image uploads** (optional): Configure Cloudinary in `.env` for product images

## Production Deployment

Before deploying to production:

1. Set `NODE_ENV=production` in `.env`
2. Use a strong, unique `JWT_SECRET`
3. Use MongoDB Atlas or a managed MongoDB service
4. Set up proper CORS configuration
5. Use environment variables for all sensitive data
6. Enable HTTPS
7. Set up proper logging and monitoring

## Support

If you encounter any issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is accessible
4. Check that all dependencies are installed
