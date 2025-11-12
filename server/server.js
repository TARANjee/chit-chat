import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to accept JSON data
app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}` .yellow.bold);

});