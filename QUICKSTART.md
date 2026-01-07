# Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Set Up MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free cluster
3. Create database user (save username/password)
4. Whitelist IP (click "Allow Access from Anywhere" for development)
5. Get connection string: Clusters → Connect → Connect your application

**Option B: Local MongoDB**
1. Install MongoDB from [mongodb.com/download](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Connection string: `mongodb://localhost:27017/ecommerce`

### Step 3: Create .env File

Create a file named `.env` in the `backend` folder with:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=30d
```

**Replace:**
- `username:password` with your MongoDB credentials
- `cluster.mongodb.net` with your actual cluster URL
- `JWT_SECRET` with a random string (use: `openssl rand -base64 32`)

### Step 4: Start Server
```bash
npm run dev
```

You should see:
```
MongoDB Connected: [your-cluster]
Server running in development mode on port 5000
```

### Step 5: Test API
Open browser: `http://localhost:5000/api/health`

Should return: `{"status":"OK","message":"Server is running"}`

### Step 6: Create Admin User

**Method 1: Via API + MongoDB**
1. Register user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@test.com","password":"admin123"}'
```

2. Update role in MongoDB:
```javascript
db.users.updateOne(
  { email: "admin@test.com" },
  { $set: { role: "admin" } }
)
```

**Method 2: Using MongoDB Compass**
1. Connect to your database
2. Go to `users` collection
3. Insert document with role: "admin"

## ✅ Done!

Your backend is now running. Start the frontend:
```bash
cd ../frontend
npm install
npm run dev
```

For detailed setup, see `SETUP.md`
