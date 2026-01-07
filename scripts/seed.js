import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';
import { sampleProducts } from '../data/seedProducts.js';

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`✅ Seeded ${products.length} products successfully`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
