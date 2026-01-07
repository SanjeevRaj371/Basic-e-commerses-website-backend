# How to Add 100 Products to Database

This script will add 100 products with all details to your database. The products are automatically generated with realistic data across multiple categories.

## Prerequisites

1. **Database Connection**: Make sure your MongoDB connection is configured in `.env` file
2. **Backend Dependencies**: Ensure all npm packages are installed

## Steps to Run

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Run the seed script:**
   ```bash
   npm run seed:100
   ```

   Or directly:
   ```bash
   node scripts/seed100Products.js
   ```

3. **Expected Output:**
   ```
   MongoDB Connected: [your-cluster]
   Generating 100 products with all details...
   Inserting products into database...
   ✅ Successfully added 100 products to the database
   
   Product categories:
     - Electronics: 15 products
     - Clothing: 12 products
     - Home & Garden: 14 products
     - Sports & Outdoors: 13 products
     - Books: 11 products
     - Toys & Games: 12 products
     - Health & Beauty: 11 products
     - Automotive: 12 products
   ```

## Product Details Included

Each product includes:
- ✅ Basic Information (name, description, price, category)
- ✅ Product Identification (SKU, barcode, brand, model, manufacturer)
- ✅ Physical Attributes (weight, dimensions, color, material, size)
- ✅ Product Details (features, specifications, tags)
- ✅ Shipping & Warranty (shipping weight, warranty information)
- ✅ SEO & Marketing (meta title, meta description, keywords)
- ✅ Status & Visibility (status, featured flag)
- ✅ Reviews & Ratings (rating, number of reviews)

## Product Categories

The script generates products across 8 categories:
- **Electronics** (Smartphones, Laptops, Tablets, Accessories, Audio, Cameras)
- **Clothing** (Men, Women, Kids, Shoes, Accessories)
- **Home & Garden** (Furniture, Decor, Kitchen, Garden, Lighting)
- **Sports & Outdoors** (Fitness, Camping, Cycling, Water Sports, Winter Sports)
- **Books** (Fiction, Non-Fiction, Educational, Comics, Children)
- **Toys & Games** (Action Figures, Board Games, Puzzles, Educational, Outdoor)
- **Health & Beauty** (Skincare, Makeup, Hair Care, Fragrance, Wellness)
- **Automotive** (Parts, Accessories, Tools, Car Care, Electronics)

## Notes

- Products are generated with unique SKUs and barcodes
- Prices range from $9.99 to $999.99
- Stock counts range from 10 to 500 units
- Most products are set to "active" status
- About 15% of products are marked as "featured"
- Products include realistic images (using Unsplash placeholder URLs)

## Troubleshooting

### Error: "MONGO_URI is not defined"
- Make sure you have a `.env` file in the `backend` directory
- Verify that `MONGO_URI` is set correctly in your `.env` file

### Error: "MongoDB Connection Error"
- Check your MongoDB connection string
- Ensure MongoDB is running (if using local MongoDB)
- Verify network access (if using MongoDB Atlas)

### Error: "Some products failed to insert"
- This might happen if SKUs already exist (duplicate SKU error)
- The script will continue inserting other products
- Check the error messages for specific issues

## Viewing Products

After running the script, you can view the products:
- **Via API**: `GET http://localhost:5000/api/products`
- **Via Frontend**: Navigate to `/products` page
- **Via Admin Panel**: Login as admin and go to `/admin/products`
