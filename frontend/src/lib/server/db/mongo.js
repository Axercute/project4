// src/lib/server/db/mongo.js
import mongoose from 'mongoose';
// import { DATABASE_URL } from '$env/static/private';
import { env } from '$env/dynamic/private';
const DATABASE_URL = env.DATABASE_URL;
let isConnected = false;

export const startMongo=async()=> {
  if (isConnected) {
    console.log('✅ Mongo already connected');
    return;
  }

  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(DATABASE_URL); // No need for deprecated options
    isConnected = true;
    console.log('✅ Connected to MongoDB via Mongoose');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    throw err;
  }
}
