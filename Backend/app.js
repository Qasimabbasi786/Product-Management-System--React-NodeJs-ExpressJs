const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5000;
const productRoutes = require('./src/routes/productRoutes');


app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Use product routes
app.use('/products', productRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})