const products = require('../data/products');


// 1. Get All Products
getAllProducts = (req, res)=>{
    res.status(200).json(products);
};


// 2. Get Single Product
getProductById = (req, res) => {
    console.log(req);
    
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.status(200).json(product); 
};


// 3. Create Product
createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        images: req.body.images,
    };
    products.push(newProduct); 
    res.status(201).json(newProduct);
};


// 4. Update Product
updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send('Product not found');

    product.title = req.body.title || product.title;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.images = req.body.images || product.images;

    res.status(200).json(product);
};


// 5. Delete Product [cite: 46]
deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Product not found');

    const deletedProduct = products.splice(index, 1); 
    res.status(200).json(deletedProduct);
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};