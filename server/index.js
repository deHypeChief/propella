import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv' 
import cors from 'cors'

import userRoute from './db/routes/user.js';
dotenv.config()
const app = express();

const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : process.env.DB_LOCAL

const connectToMongoDB = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
    setTimeout(connectToMongoDB, 5000); // Attempt to reconnect every 5 seconds
  });

  db.once('open', () => {
    console.log('Connected to MongoDB!');
  });
};

connectToMongoDB();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://site-propella.vercel.app',
}));
app.use(express.urlencoded({extended:false}))
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Server is up and running')
})
app.use('/api/users', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
