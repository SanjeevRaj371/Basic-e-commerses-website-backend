// Environment variable validation
export const validateEnv = () => {
  const required = ['MONGO_URI', 'JWT_SECRET'];
  const missing = [];

  required.forEach((key) => {
    if (!process.env[key]) {
      missing.push(key);
    }
  });

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach((key) => console.error(`   - ${key}`));
    console.error('\nPlease check your .env file in the backend directory.');
    process.exit(1);
  }

  // Validate MONGO_URI format
  if (process.env.MONGO_URI) {
    const uri = process.env.MONGO_URI.trim();
    
    // Check for common issues
    if (uri.includes('//ecommerce') || uri.includes('/ecommerce')) {
      console.warn('⚠️  Warning: Your MONGO_URI might have an incorrect database name format.');
      console.warn('   Database name should be at the end: ...mongodb.net/database_name');
      console.warn('   Not: ...mongodb.net//database_name or ...mongodb.net/ecommerce');
    }

    // Validate it's a MongoDB URI
    if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
      console.error('❌ Invalid MONGO_URI format. Must start with mongodb:// or mongodb+srv://');
      process.exit(1);
    }
  }

  console.log('✅ Environment variables validated');
};
