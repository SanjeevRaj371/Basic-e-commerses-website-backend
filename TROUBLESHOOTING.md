# Troubleshooting Guide

## Common MongoDB Connection Errors

### Error: "Invalid namespace specified: /ecommerce.products"

This error occurs when your MongoDB connection string has an incorrect format.

#### Solution 1: Check Your Connection String Format

Your `MONGO_URI` in `.env` should follow this format:

**For MongoDB Atlas:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ecommerce?retryWrites=true&w=majority
```

**For Local MongoDB:**
```
mongodb://localhost:27017/ecommerce
```

#### Common Mistakes:

❌ **Wrong - Has double slash:**
```
mongodb+srv://user:pass@cluster.net//ecommerce
```

✅ **Correct:**
```
mongodb+srv://user:pass@cluster.net/ecommerce
```

❌ **Wrong - Database name with slash:**
```
mongodb+srv://user:pass@cluster.net/ecommerce/products
```

✅ **Correct - Just database name:**
```
mongodb+srv://user:pass@cluster.net/ecommerce
```

❌ **Wrong - Missing database name:**
```
mongodb+srv://user:pass@cluster.net/
```

✅ **Correct - Include database name:**
```
mongodb+srv://user:pass@cluster.net/ecommerce
```

#### Solution 2: Verify Your .env File

1. Open `backend/.env` file
2. Check your `MONGO_URI` line
3. Make sure:
   - No double slashes (`//`)
   - Database name is at the end (after the last `/`)
   - No special characters in database name
   - Password is URL-encoded if it contains special characters

#### Solution 3: URL Encode Special Characters

If your password contains special characters like `@`, `#`, `%`, etc., you need to URL-encode them:

- `@` becomes `%40`
- `#` becomes `%23`
- `%` becomes `%25`
- `/` becomes `%2F`

Example:
```
# Password: my@pass#123
# Encoded: my%40pass%23123

MONGO_URI=mongodb+srv://user:my%40pass%23123@cluster.net/ecommerce
```

#### Solution 4: Test Connection String

You can test your connection string format:

1. **Using MongoDB Compass:**
   - Download MongoDB Compass
   - Try connecting with your connection string
   - If it works there, the format is correct

2. **Using mongosh:**
   ```bash
   mongosh "your_connection_string"
   ```

#### Solution 5: Use a Different Database Name

If the issue persists, try using a simpler database name:

```env
MONGO_URI=mongodb+srv://user:pass@cluster.net/shop?retryWrites=true&w=majority
```

Then restart your server.

---

## Other Common Errors

### Error: "MongoNetworkError"

**Causes:**
- Internet connection issue
- IP not whitelisted in Atlas
- Firewall blocking connection

**Solutions:**
1. Check internet connection
2. Verify IP is whitelisted in MongoDB Atlas
3. Check firewall settings

### Error: "Authentication failed"

**Causes:**
- Wrong username or password
- Special characters in password not encoded

**Solutions:**
1. Verify username and password in connection string
2. URL-encode special characters in password
3. Check database user exists in Atlas

### Error: "Port 5000 already in use"

**Solutions:**
1. Change PORT in `.env` to another port (e.g., 5001)
2. Or stop the process using port 5000

### Error: "JWT_SECRET is not defined"

**Solutions:**
1. Check `.env` file exists in `backend` folder
2. Verify JWT_SECRET is set
3. Restart server after changing `.env`

---

## Quick Fix Checklist

- [ ] `.env` file exists in `backend` folder
- [ ] `MONGO_URI` has correct format (no double slashes)
- [ ] Database name is included in connection string
- [ ] Password is URL-encoded if it has special characters
- [ ] IP is whitelisted (for Atlas)
- [ ] MongoDB service is running (for local)
- [ ] No typos in connection string
- [ ] Restarted server after changing `.env`

---

## Still Having Issues?

1. **Check server logs** - Look for specific error messages
2. **Verify connection string** - Test in MongoDB Compass
3. **Check MongoDB Atlas** - Ensure cluster is running
4. **Review .env file** - Make sure all values are correct
5. **Restart everything** - Stop server, check .env, restart

---

## Example .env File

```env
NODE_ENV=development
PORT=5000

# MongoDB Atlas Example
MONGO_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/ecommerce?retryWrites=true&w=majority

# Local MongoDB Example
# MONGO_URI=mongodb://localhost:27017/ecommerce

JWT_SECRET=your_super_secret_jwt_key_at_least_32_characters_long
JWT_EXPIRE=30d
```

**Important Notes:**
- Replace `myuser` and `mypassword` with your actual credentials
- Replace `cluster0.abc123.mongodb.net` with your actual cluster URL
- Database name (`ecommerce`) should be after the last `/`
- No double slashes anywhere
