// Generate 100 products with all details programmatically

const categories = [
  { name: 'Electronics', subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories', 'Audio', 'Cameras'] },
  { name: 'Clothing', subcategories: ['Men', 'Women', 'Kids', 'Shoes', 'Accessories'] },
  { name: 'Home & Garden', subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden', 'Lighting'] },
  { name: 'Sports & Outdoors', subcategories: ['Fitness', 'Camping', 'Cycling', 'Water Sports', 'Winter Sports'] },
  { name: 'Books', subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Comics', 'Children'] },
  { name: 'Toys & Games', subcategories: ['Action Figures', 'Board Games', 'Puzzles', 'Educational', 'Outdoor'] },
  { name: 'Health & Beauty', subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrance', 'Wellness'] },
  { name: 'Automotive', subcategories: ['Parts', 'Accessories', 'Tools', 'Car Care', 'Electronics'] },
];

const brands = {
  Electronics: ['TechPro', 'SmartTech', 'DigitalX', 'ElectroMax', 'Innovate'],
  Clothing: ['StyleCo', 'FashionHub', 'UrbanWear', 'ClassicStyle', 'TrendSet'],
  'Home & Garden': ['HomeLife', 'GardenPro', 'InteriorDesign', 'ComfortHome', 'EcoLiving'],
  'Sports & Outdoors': ['FitLife', 'AdventureGear', 'ActiveWear', 'OutdoorPro', 'SportMax'],
  Books: ['BookHouse', 'LiteraryPress', 'EduBooks', 'StoryTeller', 'KnowledgeBase'],
  'Toys & Games': ['PlayTime', 'FunZone', 'KidsWorld', 'GameMaster', 'ToyLand'],
  'Health & Beauty': ['BeautyPro', 'WellnessCo', 'GlowSkin', 'PureBeauty', 'HealthFirst'],
  Automotive: ['AutoPro', 'CarTech', 'DriveMax', 'VehicleParts', 'AutoCare'],
};

const materials = {
  Electronics: ['Plastic', 'Metal', 'Glass', 'Aluminum', 'Carbon Fiber'],
  Clothing: ['Cotton', 'Polyester', 'Wool', 'Leather', 'Denim', 'Silk'],
  'Home & Garden': ['Wood', 'Metal', 'Glass', 'Ceramic', 'Fabric', 'Plastic'],
  'Sports & Outdoors': ['Nylon', 'Polyester', 'Rubber', 'Metal', 'Plastic', 'Foam'],
  Books: ['Paper', 'Cardboard', 'Leather', 'Cloth'],
  'Toys & Games': ['Plastic', 'Wood', 'Fabric', 'Metal', 'Rubber'],
  'Health & Beauty': ['Plastic', 'Glass', 'Metal', 'Ceramic'],
  Automotive: ['Metal', 'Plastic', 'Rubber', 'Fabric', 'Leather'],
};

const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Silver', 'Gold', 'Gray', 'Brown', 'Pink', 'Purple'];

const generateSKU = (index) => {
  return `SKU-${String(index).padStart(6, '0')}`;
};

const generateBarcode = () => {
  return Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
};

const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

const generateFeatures = (category) => {
  const featureSets = {
    Electronics: [
      ['Wireless connectivity', 'Long battery life', 'Fast charging', 'High resolution display'],
      ['Bluetooth 5.0', 'Water resistant', 'Noise cancellation', 'Voice assistant'],
      ['4K display', 'Touch screen', 'Multi-device sync', 'App compatibility'],
      ['Fast processor', 'Large storage', 'Premium design', 'Warranty included'],
    ],
    Clothing: [
      ['Breathable fabric', 'Machine washable', 'Wrinkle resistant', 'Comfortable fit'],
      ['Moisture wicking', 'UV protection', 'Stretchable', 'Durable construction'],
      ['Classic design', 'Versatile style', 'Easy care', 'Quality materials'],
    ],
    'Home & Garden': [
      ['Easy assembly', 'Durable construction', 'Weather resistant', 'Modern design'],
      ['Space saving', 'Multi-functional', 'Eco-friendly', 'Easy to clean'],
      ['Premium materials', 'Stylish finish', 'Long lasting', 'Warranty included'],
    ],
    'Sports & Outdoors': [
      ['Lightweight', 'Waterproof', 'Ergonomic design', 'Durable materials'],
      ['Adjustable', 'Comfortable', 'High performance', 'Professional grade'],
    ],
    Books: [
      ['Hardcover', 'Illustrated', 'Large print', 'Dust jacket included'],
      ['Paperback', 'Lightweight', 'Portable', 'High quality paper'],
    ],
    'Toys & Games': [
      ['Educational', 'Safe materials', 'Age appropriate', 'Interactive'],
      ['Durable construction', 'Multiple players', 'Easy to learn', 'Fun for all ages'],
    ],
    'Health & Beauty': [
      ['Natural ingredients', 'Cruelty free', 'Hypoallergenic', 'Long lasting'],
      ['Organic', 'Paraben free', 'Sulfate free', 'Dermatologist tested'],
    ],
    Automotive: [
      ['Easy installation', 'Durable materials', 'Weather resistant', 'Universal fit'],
      ['High performance', 'Long lasting', 'Professional grade', 'Warranty included'],
    ],
  };
  
  const sets = featureSets[category] || featureSets.Electronics;
  return randomChoice(sets);
};

const getProductImage = (category, index) => {
  // Use Unsplash Source API for category-based images
  const categoryImages = {
    Electronics: [
      '1505740420928-5e560c06d30e', '1523275335684-37898b6baf30', '1527814050087-3793815479db',
      '1587829741301-dc798b83add3', '1587825147138-346b228b8b74', '1609091839311-d5365f9ff1c5',
    ],
    Clothing: [
      '1521572163474-6864f9cf17ab', '1515889577614-4f4c2c2c2c2c', '1539533113202-2ea66d24be3d',
      '1551028719-22169b316e0d', '1553062407-98eeb64c6a62', '1562157873-4a5c0b5b5b5b',
    ],
    'Home & Garden': [
      '1507473885765-e6ed057f782c', '1513475382585-d06e3bcb1eef', '1522771739534-7444a77e7a70',
      '1538688525198-9b4f310363ed', '1556911220-bff31c8121a1', '1560448204-e02f084052e1',
    ],
    'Sports & Outdoors': [
      '1571019613454-1cb2f99b2d8b', '1576678927484-3f4f4f4f4f4f', '1571902943021-130c2b4f4f4f',
      '1576678927484-3f4f4f4f4f4f', '1571902943021-130c2b4f4f4f', '1576678927484-3f4f4f4f4f4f',
    ],
    Books: [
      '1543002588-bfa74002ed7e', '1507003211169-0a1dd7228f2d', '1481627834876-b7833e8f5570',
      '1507003211169-0a1dd7228f2d', '1481627834876-b7833e8f5570', '1543002588-bfa74002ed7e',
    ],
    'Toys & Games': [
      '1558618666-fcd25f85cd1e', '1558618666-fcd25f85cd1e', '1558618666-fcd25f85cd1e',
      '1558618666-fcd25f85cd1e', '1558618666-fcd25f85cd1e', '1558618666-fcd25f85cd1e',
    ],
    'Health & Beauty': [
      '1522338248692-0bd4c2c2c2c2', '1522338248692-0bd4c2c2c2c2', '1522338248692-0bd4c2c2c2c2',
      '1522338248692-0bd4c2c2c2c2', '1522338248692-0bd4c2c2c2c2', '1522338248692-0bd4c2c2c2c2',
    ],
    Automotive: [
      '1492144534655-ae79c964c9d7', '1492144534655-ae79c964c9d7', '1492144534655-ae79c964c9d7',
      '1492144534655-ae79c964c9d7', '1492144534655-ae79c964c9d7', '1492144534655-ae79c964c9d7',
    ],
  };
  
  const images = categoryImages[category] || categoryImages.Electronics;
  const imageId = images[index % images.length];
  return `https://images.unsplash.com/photo-${imageId}?w=500&h=500&fit=crop`;
};

const generateSpecifications = (category, productName) => {
  const specs = {};
  
  if (category === 'Electronics') {
    specs['Display Size'] = `${randomInt(5, 15)} inches`;
    specs['Resolution'] = `${randomInt(1080, 4320)}p`;
    specs['Battery Life'] = `${randomInt(8, 24)} hours`;
    specs['Connectivity'] = randomChoice(['WiFi, Bluetooth', 'USB-C, WiFi', 'Bluetooth 5.0', 'Wireless']);
    specs['Operating System'] = randomChoice(['Android', 'iOS', 'Windows', 'Linux']);
  } else if (category === 'Clothing') {
    specs['Material'] = randomChoice(materials.Clothing);
    specs['Care Instructions'] = 'Machine washable';
    specs['Fit'] = randomChoice(['Regular', 'Slim', 'Relaxed', 'Athletic']);
    specs['Origin'] = randomChoice(['Imported', 'Made in USA', 'Made in China']);
  } else if (category === 'Home & Garden') {
    specs['Material'] = randomChoice(materials['Home & Garden']);
    specs['Dimensions'] = `${randomInt(20, 200)} x ${randomInt(20, 200)} x ${randomInt(10, 100)} cm`;
    specs['Weight Capacity'] = `${randomInt(50, 500)} kg`;
    specs['Assembly Required'] = randomChoice(['Yes', 'No']);
  } else if (category === 'Sports & Outdoors') {
    specs['Material'] = randomChoice(materials['Sports & Outdoors']);
    specs['Weight'] = `${randomFloat(0.5, 5)} kg`;
    specs['Water Resistance'] = randomChoice(['Waterproof', 'Water Resistant', 'Not Waterproof']);
    specs['Recommended Age'] = `${randomInt(8, 18)}+ years`;
  } else if (category === 'Books') {
    specs['Pages'] = randomInt(100, 800);
    specs['Language'] = 'English';
    specs['Publisher'] = randomChoice(['BookHouse Publishing', 'Literary Press', 'EduBooks Inc']);
    specs['Publication Date'] = '2024';
  } else if (category === 'Toys & Games') {
    specs['Age Range'] = `${randomInt(3, 12)}+ years`;
    specs['Number of Players'] = randomInt(1, 6);
    specs['Material'] = randomChoice(materials['Toys & Games']);
    specs['Battery Required'] = randomChoice(['Yes', 'No']);
  } else if (category === 'Health & Beauty') {
    specs['Volume'] = `${randomInt(50, 500)} ml`;
    specs['Ingredients'] = 'Natural and organic ingredients';
    specs['Skin Type'] = randomChoice(['All', 'Sensitive', 'Oily', 'Dry', 'Combination']);
    specs['Cruelty Free'] = 'Yes';
  } else if (category === 'Automotive') {
    specs['Compatibility'] = randomChoice(['Universal', 'Specific Models', 'Most Vehicles']);
    specs['Material'] = randomChoice(materials.Automotive);
    specs['Installation'] = randomChoice(['Easy', 'Professional Recommended', 'Plug and Play']);
    specs['Warranty'] = `${randomInt(1, 3)} years`;
  }
  
  return specs;
};

const generateProduct = (index) => {
  const categoryData = randomChoice(categories);
  const category = categoryData.name;
  const subcategory = randomChoice(categoryData.subcategories);
  const brand = randomChoice(brands[category]);
  const color = randomChoice(colors);
  const material = randomChoice(materials[category] || materials.Electronics);
  
  const basePrice = randomFloat(9.99, 999.99);
  const compareAtPrice = Math.random() > 0.5 ? parseFloat(basePrice) * 1.3 : null;
  
  const productNames = {
    Electronics: [
      'Wireless Bluetooth Headphones', 'Smart Watch Pro', 'USB-C Hub', 'Portable Power Bank',
      'HD Webcam', 'Wireless Mouse', 'Mechanical Keyboard', 'Tablet Stand', 'Phone Charger',
      'Bluetooth Speaker', 'Smart TV', 'Gaming Console', 'Laptop', 'Smartphone', 'Tablet',
    ],
    Clothing: [
      'Classic T-Shirt', 'Denim Jeans', 'Hooded Sweatshirt', 'Running Shoes', 'Leather Jacket',
      'Summer Dress', 'Winter Coat', 'Athletic Shorts', 'Formal Shirt', 'Casual Pants',
      'Sneakers', 'Boots', 'Sandals', 'Baseball Cap', 'Backpack',
    ],
    'Home & Garden': [
      'Modern Sofa', 'Dining Table', 'Desk Lamp', 'Wall Clock', 'Plant Pot',
      'Throw Pillow', 'Area Rug', 'Coffee Table', 'Bookshelf', 'Bed Frame',
      'Garden Tool Set', 'Outdoor Chair', 'Plant Stand', 'Wall Art', 'Vase',
    ],
    'Sports & Outdoors': [
      'Yoga Mat', 'Dumbbell Set', 'Camping Tent', 'Hiking Backpack', 'Bicycle',
      'Tennis Racket', 'Basketball', 'Soccer Ball', 'Fishing Rod', 'Kayak',
      'Running Shoes', 'Gym Bag', 'Water Bottle', 'Exercise Bike', 'Treadmill',
    ],
    Books: [
      'The Great Adventure', 'Science Explained', 'History of the World', 'Fiction Novel',
      'Cookbook Collection', 'Children\'s Storybook', 'Educational Guide', 'Biography',
      'Mystery Thriller', 'Romance Novel', 'Self-Help Book', 'Comic Book', 'Poetry Collection',
    ],
    'Toys & Games': [
      'Action Figure Set', 'Board Game', 'Puzzle Set', 'Building Blocks', 'Remote Control Car',
      'Doll House', 'Educational Toy', 'Outdoor Playset', 'Art Supplies', 'Musical Instrument',
      'Video Game', 'Card Game', 'Science Kit', 'LEGO Set', 'Stuffed Animal',
    ],
    'Health & Beauty': [
      'Face Cleanser', 'Moisturizer', 'Sunscreen', 'Shampoo', 'Conditioner',
      'Lipstick', 'Foundation', 'Mascara', 'Perfume', 'Body Lotion',
      'Face Mask', 'Serum', 'Toner', 'Eye Cream', 'Hair Styling Product',
    ],
    Automotive: [
      'Car Phone Mount', 'Dash Cam', 'Car Charger', 'Floor Mats', 'Steering Wheel Cover',
      'Car Air Freshener', 'Tire Pressure Gauge', 'Jump Starter', 'Car Vacuum', 'LED Lights',
      'Car Cover', 'Seat Covers', 'Car Organizer', 'Bluetooth Adapter', 'GPS Tracker',
    ],
  };
  
  const name = randomChoice(productNames[category] || productNames.Electronics);
  const fullName = `${brand} ${name} - ${color}`;
  
  const descriptions = {
    Electronics: `Premium ${name.toLowerCase()} from ${brand}. Features ${randomChoice(['advanced', 'cutting-edge', 'innovative'])} technology with ${randomChoice(['superior', 'excellent', 'outstanding'])} performance. Perfect for ${randomChoice(['daily use', 'professional work', 'entertainment', 'gaming'])}.`,
    Clothing: `Stylish ${name.toLowerCase()} from ${brand}. Made from high-quality ${material.toLowerCase()} in ${color.toLowerCase()}. ${randomChoice(['Comfortable', 'Durable', 'Fashionable'])} design perfect for ${randomChoice(['casual wear', 'formal occasions', 'sports activities', 'everyday use'])}.`,
    'Home & Garden': `Beautiful ${name.toLowerCase()} from ${brand}. Crafted from premium ${material.toLowerCase()} with ${randomChoice(['modern', 'classic', 'contemporary'])} design. Perfect for ${randomChoice(['living room', 'bedroom', 'office', 'garden'])}.`,
    'Sports & Outdoors': `Professional-grade ${name.toLowerCase()} from ${brand}. Built with ${material.toLowerCase()} for ${randomChoice(['durability', 'performance', 'comfort'])}. Ideal for ${randomChoice(['fitness enthusiasts', 'outdoor adventures', 'sports activities', 'training'])}.`,
    Books: `Engaging ${name.toLowerCase()} from ${brand} Publishing. ${randomChoice(['Well-written', 'Informative', 'Entertaining'])} content that ${randomChoice(['educates', 'entertains', 'inspires'])} readers. Perfect for ${randomChoice(['leisure reading', 'education', 'reference', 'gift'])}.`,
    'Toys & Games': `Fun ${name.toLowerCase()} from ${brand}. ${randomChoice(['Educational', 'Entertaining', 'Interactive'])} design that ${randomChoice(['stimulates creativity', 'promotes learning', 'provides hours of fun'])}. Safe and durable for ${randomChoice(['children', 'all ages', 'family use'])}.`,
    'Health & Beauty': `Premium ${name.toLowerCase()} from ${brand}. Formulated with ${randomChoice(['natural', 'organic', 'high-quality'])} ingredients for ${randomChoice(['radiant skin', 'healthy hair', 'beautiful appearance'])}. ${randomChoice(['Dermatologist tested', 'Cruelty-free', 'Hypoallergenic'])}.`,
    Automotive: `High-quality ${name.toLowerCase()} from ${brand}. Designed for ${randomChoice(['durability', 'performance', 'convenience'])} with ${randomChoice(['easy installation', 'universal fit', 'premium materials'])}. Perfect for ${randomChoice(['car enthusiasts', 'daily drivers', 'professional use'])}.`,
  };
  
  const description = descriptions[category] || descriptions.Electronics;
  const shortDescription = description.split('.')[0] + '.';
  
  const weightValue = category === 'Electronics' ? randomFloat(0.1, 2) : 
                     category === 'Clothing' ? randomFloat(0.2, 1.5) :
                     category === 'Home & Garden' ? randomFloat(1, 50) :
                     category === 'Sports & Outdoors' ? randomFloat(0.5, 10) :
                     category === 'Books' ? randomFloat(0.3, 2) :
                     category === 'Toys & Games' ? randomFloat(0.2, 5) :
                     category === 'Health & Beauty' ? randomFloat(0.1, 1) :
                     randomFloat(0.5, 5);
  
  const dimensions = {
    length: category === 'Electronics' ? randomInt(10, 50) :
            category === 'Clothing' ? randomInt(30, 100) :
            category === 'Home & Garden' ? randomInt(50, 200) :
            category === 'Sports & Outdoors' ? randomInt(20, 150) :
            category === 'Books' ? randomInt(15, 25) :
            category === 'Toys & Games' ? randomInt(10, 50) :
            category === 'Health & Beauty' ? randomInt(5, 20) :
            randomInt(10, 100),
    width: randomInt(10, 100),
    height: randomInt(5, 50),
  };
  
  const warrantyPeriods = [
    { value: 12, unit: 'months' },
    { value: 24, unit: 'months' },
    { value: 36, unit: 'months' },
    { value: 1, unit: 'years' },
    { value: 2, unit: 'years' },
  ];
  
  const warrantyPeriod = Math.random() > 0.3 ? randomChoice(warrantyPeriods) : null;
  
  const keywords = [
    category.toLowerCase(),
    subcategory.toLowerCase(),
    brand.toLowerCase(),
    color.toLowerCase(),
    material.toLowerCase(),
    name.toLowerCase().split(' ')[0],
  ];
  
  return {
    name: fullName,
    description,
    shortDescription,
    price: parseFloat(basePrice),
    compareAtPrice: compareAtPrice ? parseFloat(compareAtPrice.toFixed(2)) : null,
    image: getProductImage(category, index),
    category,
    subcategory,
    countInStock: randomInt(10, 500),
    sku: generateSKU(index + 1),
    barcode: generateBarcode(),
    brand,
    model: `${brand.substring(0, 3).toUpperCase()}-${randomInt(1000, 9999)}`,
    manufacturer: brand,
    weight: {
      value: parseFloat(weightValue),
      unit: weightValue < 1 ? 'g' : 'kg',
    },
    dimensions: {
      length: dimensions.length,
      width: dimensions.width,
      height: dimensions.height,
      unit: 'cm',
    },
    color,
    material,
    size: category === 'Clothing' ? randomChoice(['XS', 'S', 'M', 'L', 'XL', 'XXL']) : 
          category === 'Books' ? randomChoice(['Small', 'Medium', 'Large']) :
          randomChoice(['Standard', 'Large', 'Small', 'Medium']),
    features: generateFeatures(category),
    specifications: generateSpecifications(category, fullName),
    tags: keywords,
    shippingWeight: {
      value: parseFloat((weightValue * 1.1).toFixed(2)),
      unit: weightValue < 1 ? 'g' : 'kg',
    },
    warranty: warrantyPeriod ? `${warrantyPeriod.value} ${warrantyPeriod.unit} manufacturer warranty` : '',
    warrantyPeriod: warrantyPeriod || { value: 0, unit: 'months' },
    metaTitle: `${fullName} | ${category} | ${brand}`,
    metaDescription: shortDescription,
    keywords,
    status: randomChoice(['active', 'active', 'active', 'draft']), // Mostly active
    featured: Math.random() > 0.85, // 15% featured
    rating: parseFloat(randomFloat(3.5, 5.0)),
    numReviews: randomInt(0, 500),
  };
};

export const generate100Products = () => {
  const products = [];
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct(i));
  }
  return products;
};
