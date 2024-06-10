import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './mongodbConnection.js';
import cookieParser from 'cookie-parser';

import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import messageRoute from './routes/messageRoute.js';
import cors from 'cors';
import path from 'path';

import { app, httpServer } from './socket/socket.io.js';

// loads the environment variables 
// from a .env file into process.env
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json so we can read the request body

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/user', userRoute);

// this resolves the current working dir
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../frontend/dist");

    app.use(express.static(frontendPath));
    
    // serve the index.html file if the route is not found
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(frontendPath, "index.html"));
    });

};

httpServer.listen(PORT, () => {
    dbConnection;
    console.log(`Server is running on port ${PORT}`);
});