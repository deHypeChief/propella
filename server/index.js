import express from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv' 
import cors from 'cors'

import userRoute from './db/routes/user.js';
dotenv.config()


const app = express();
const db_Url = process.env.DB_URL
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


// Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB connection URI)
connect(db_Url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));


// Define your routes here
app.use('/api/users', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
