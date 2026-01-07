import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Validate MONGO_URI exists
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    // Clean up the connection string
    let mongoUri = process.env.MONGO_URI.trim();
    
    // Fix common issues: remove double slashes in database name part
    // Pattern: mongodb://host//database or mongodb://host/database
    mongoUri = mongoUri.replace(/(mongodb(\+srv)?:\/\/[^/]+\/)\//, '$1');
    
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('\nPlease check your MONGO_URI in .env file');
    console.error('Correct format examples:');
    console.error('  Atlas: mongodb+srv://username:password@cluster.mongodb.net/ecommerce');
    console.error('  Local: mongodb://localhost:27017/ecommerce');
    console.error('\nCommon issues:');
    console.error('  - Double slashes: mongodb://host//database (WRONG)');
    console.error('  - Missing database: mongodb://host/ (WRONG)');
    console.error('  - Correct: mongodb://host/database');
    process.exit(1);
  }
};

export default connectDB;
