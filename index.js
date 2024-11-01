import express from 'express';
import { appMethods } from './app.methods.js';
import { connectDB } from './db/connection.js';


const app = express();

appMethods(app, express);
connectDB();



