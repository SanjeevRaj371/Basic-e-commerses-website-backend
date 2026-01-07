import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: [true, 'Please add a product name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    shortDescription: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
      default: 0,
    },
    compareAtPrice: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
    },
    subcategory: {
      type: String,
      default: '',
    },
    countInStock: {
      type: Number,
      required: [true, 'Please add stock count'],
      default: 0,
    },
    
    // Product Identification
    sku: {
      type: String,
      default: '',
      unique: true,
      sparse: true,
    },
    barcode: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: '',
    },
    model: {
      type: String,
      default: '',
    },
    manufacturer: {
      type: String,
      default: '',
    },
    
    // Physical Attributes
    weight: {
      value: { type: Number, default: 0 },
      unit: { type: String, default: 'kg', enum: ['kg', 'g', 'lb', 'oz'] },
    },
    dimensions: {
      length: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
      unit: { type: String, default: 'cm', enum: ['cm', 'm', 'in', 'ft'] },
    },
    color: {
      type: String,
      default: '',
    },
    material: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    
    // Product Details
    features: [{
      type: String,
    }],
    specifications: {
      type: Map,
      of: String,
      default: {},
    },
    tags: [{
      type: String,
    }],
    
    // Shipping & Warranty
    shippingWeight: {
      value: { type: Number, default: 0 },
      unit: { type: String, default: 'kg' },
    },
    warranty: {
      type: String,
      default: '',
    },
    warrantyPeriod: {
      value: { type: Number, default: 0 },
      unit: { type: String, default: 'months', enum: ['days', 'months', 'years'] },
    },
    
    // SEO & Marketing
    metaTitle: {
      type: String,
      default: '',
    },
    metaDescription: {
      type: String,
      default: '',
    },
    keywords: [{
      type: String,
    }],
    
    // Status & Visibility
    status: {
      type: String,
      enum: ['active', 'inactive', 'draft'],
      default: 'active',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    
    // Reviews & Ratings
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
