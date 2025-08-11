// src/lib/db.js (using ES module syntax)

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL;
console.log('DB URL:', MONGODB_URI);

