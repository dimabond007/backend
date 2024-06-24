// seed.js
// This script seeds the database with sample data.
// This is for development purposes only and should not be used in production.

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/Product.model");

dotenv.config(); // Load environment variables

// Sample data
const products = [
    { "id": "1", "name": "Smartphone", "price": 699, "categories": "electronics", "brand": "TechBrand", "rating": 4.5 },
    { "id": "2", "name": "Laptop", "price": 999, "categories": "electronics", "brand": "CompuTech", "rating": 4.7 },
    { "id": "3", "name": "Headphones", "price": 199, "categories": "electronics", "brand": "SoundMax", "rating": 4.3 },
    { "id": "4", "name": "Desk Chair", "price": 150, "categories": "furniture", "brand": "ComfortSeat", "rating": 4.2 },
    { "id": "5", "name": "Desk", "price": 300, "categories": "furniture", "brand": "OfficeWorks", "rating": 4.4 },
    { "id": "6", "name": "Monitor", "price": 250, "categories": "electronics", "brand": "ViewSharp", "rating": 4.6 },
    { "id": "7", "name": "Keyboard", "price": 100, "categories": "electronics", "brand": "TypeMaster", "rating": 4.1 },
    { "id": "8", "name": "Mouse", "price": 50, "categories": "electronics", "brand": "ClickPro", "rating": 4.0 },
    { "id": "9", "name": "Bookshelf", "price": 200, "categories": "furniture", "brand": "HomeStore", "rating": 4.3 },
    { "id": "10", "name": "Table Lamp", "price": 60, "categories": "furniture", "brand": "BrightLight", "rating": 4.2 },
    { "id": "11", "name": "Running Shoes", "price": 120, "categories": "sports", "brand": "RunFast", "rating": 4.5 },
    { "id": "12", "name": "Tennis Racket", "price": 180, "categories": "sports", "brand": "SwingPro", "rating": 4.6 },
    { "id": "13", "name": "Backpack", "price": 80, "categories": "accessories", "brand": "CarryAll", "rating": 4.3 },
    { "id": "14", "name": "Water Bottle", "price": 25, "categories": "accessories", "brand": "Hydrate", "rating": 4.4 },
    { "id": "15", "name": "Smartwatch", "price": 300, "categories": "electronics", "brand": "WristTech", "rating": 4.7 },
    { "id": "16", "name": "Bluetooth Speaker", "price": 150, "categories": "electronics", "brand": "SoundBlast", "rating": 4.5 },
    { "id": "17", "name": "Gaming Console", "price": 500, "categories": "electronics", "brand": "GameHub", "rating": 4.8 },
    { "id": "18", "name": "Blender", "price": 70, "categories": "home appliances", "brand": "MixMaster", "rating": 4.1 },
    { "id": "19", "name": "Coffee Maker", "price": 120, "categories": "home appliances", "brand": "BrewPerfect", "rating": 4.3 },
    { "id": "20", "name": "Microwave", "price": 150, "categories": "home appliances", "brand": "HeatQuick", "rating": 4.4 }
  ]
  ;

// Insert sample data into the database
async function seedDB() {
  await connectDB(); // Connect to the database
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

seedDB();