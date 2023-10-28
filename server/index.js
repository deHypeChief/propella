import express from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv' 
import cors from 'cors'

import userRoute from './db/routes/user.js';
dotenv.config()


const app = express();
const PORT = process.env.PORT || 3000;

const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : process.env.DB_LOCAL




connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));



// Define your routes here
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use('/api/users', userRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
