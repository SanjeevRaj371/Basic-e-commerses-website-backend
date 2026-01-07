import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';
import { generate100Products } from '../data/generateProducts.js';

dotenv.config();

const seed100Products = async () => {
  try {
    await connectDB();

    console.log('Generating 100 products with all details...');
    const products = generate100Products();

    console.log('Inserting products into database...');
    const insertedProducts = await Product.insertMany(products, { ordered: false });
    
    console.log(`✅ Successfully added ${insertedProducts.length} products to the database`);
    console.log('\nProduct categories:');
    
    // Count products by category
    const categoryCount = {};
    insertedProducts.forEach(product => {
      categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
    });
    
    Object.entries(categoryCount).forEach(([category, count]) => {
      console.log(`  - ${category}: ${count} products`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error.message);
    if (error.writeErrors) {
      console.error('Some products failed to insert:');
      error.writeErrors.forEach(err => {
        console.error(`  - ${err.errmsg}`);
      });
    }
    process.exit(1);
  }
};

seed100Products();
