const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const authController = require('./controllers/authController');
const blogController = require('./controllers/blogController');
const app = express();

// Port: 5000
const PORT = process.env.PORT || 5000;
MONGO_URL="mongodb+srv://mayankdada:BOdQnooEcrMmIzGr@cluster0.o6gsign.mongodb.net/?retryWrites=true&w=majority"
// Using async/await to connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB has been connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

connectToDatabase();


//routes 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth',authController)
app.use( '/blog',blogController)
app.listen(PORT, () => console.log(`Server has been started successfully on port ${PORT}`));