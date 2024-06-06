import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './mongodbConnection.js';
import cookieParser from 'cookie-parser';

import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import messageRoute from './routes/messageRoute.js';

// loads the environment variables 
// from a .env file into process.env
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); // for parsing application/json so we can read the request body

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => {
    dbConnection;
    console.log(`Server is running on port ${PORT}`);
});