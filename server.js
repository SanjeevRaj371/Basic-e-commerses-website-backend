import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { validateEnv } from './utils/validateEnv.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// Import Routes
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import userRoutes from './routes/users.js';

// Load environment variables
dotenv.config();

// Validate environment variables
validateEnv();

// Connect to database
connectDB();

const app = express();

// Middleware
// CORS configuration - allow requests from frontend
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    // Allow all origins in development, or specific origins in production
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'https://basic-e-commerses-website-frontend.vercel.app', // No trailing slash
      'http://localhost:5173',
      'http://localhost:3000',
    ].filter(Boolean);
    
    // In development or if FRONTEND_URL not set, allow all origins
    if (process.env.NODE_ENV === 'development' || allowedOrigins.length === 0) {
      return callback(null, true);
    }
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Allow all origins for now - can restrict later if needed
      callback(null, true);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'E-commerce API Server',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/api/health',
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        me: 'GET /api/auth/me',
        profile: 'PUT /api/auth/profile',
      },
      products: {
        list: 'GET /api/products',
        get: 'GET /api/products/:id',
        create: 'POST /api/products (Admin)',
        update: 'PUT /api/products/:id (Admin)',
        delete: 'DELETE /api/products/:id (Admin)',
      },
      orders: {
        create: 'POST /api/orders (Protected)',
        myOrders: 'GET /api/orders/me (Protected)',
        allOrders: 'GET /api/orders (Admin)',
        getOrder: 'GET /api/orders/:id (Protected)',
        update: 'PUT /api/orders/:id (Admin)',
      },
      users: {
        list: 'GET /api/users (Admin)',
        getUser: 'GET /api/users/:id (Admin)',
        update: 'PUT /api/users/:id (Admin)',
        delete: 'DELETE /api/users/:id (Admin)',
      },
    },
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
