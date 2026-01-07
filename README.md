# Backend API Documentation

RESTful API backend for the E-commerce platform built with Node.js, Express.js, and MongoDB.

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── productController.js # Product CRUD operations
│   ├── orderController.js   # Order management
│   └── userController.js    # User management (admin)
├── middleware/
│   ├── authMiddleware.js     # JWT authentication & admin check
│   └── errorMiddleware.js    # Error handling
├── models/
│   ├── User.js              # User schema
│   ├── Product.js           # Product schema
│   └── Order.js             # Order schema
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── products.js          # Product routes
│   ├── orders.js            # Order routes
│   └── users.js             # User routes (admin)
├── utils/
│   └── generateToken.js     # JWT token generation
├── server.js                # Express app entry point
├── package.json             # Dependencies
└── .env                     # Environment variables (create this)
```

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   JWT_EXPIRE=30d
   ```

3. **Start server:**
   ```bash
   npm run dev
   ```

For detailed setup instructions, see:
- `QUICKSTART.md` - Quick 5-minute setup
- `SETUP.md` - Detailed setup guide
- `../SETUP_GUIDE.md` - Complete step-by-step guide

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)
- `PUT /api/auth/profile` - Update profile (Protected)

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `POST /api/products/:id/reviews` - Add review (Protected)

### Orders
- `POST /api/orders` - Create order (Protected)
- `GET /api/orders/me` - Get user orders (Protected)
- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/:id` - Get order details (Protected)
- `PUT /api/orders/:id` - Update order status (Admin)
- `DELETE /api/orders/:id` - Delete order (Admin)

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🔐 Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## 📝 Request/Response Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Product (Admin)
```bash
POST /api/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "countInStock": 10
}
```

## 🛠️ Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Express Async Handler** - Async error handling

## 📦 Dependencies

See `package.json` for complete list.

## 🔧 Development

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## 🌐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `development` |
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT secret key | `your_secret_key` |
| `JWT_EXPIRE` | JWT expiration | `30d` |

## 🐛 Troubleshooting

See `SETUP.md` or `../SETUP_GUIDE.md` for troubleshooting guide.

## 📄 License

ISC
