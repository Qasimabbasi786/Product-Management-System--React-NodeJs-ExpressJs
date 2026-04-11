const express = require("express");
const cors = require('cors');
const app = express();
const productRoutes = require('./src/routes/productRoutes');
require('dotenv').config();


const PORT = process.env.PORT || 5000;


app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Use product routes
app.use('/products', productRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})