const fs = require("fs");
const Product = require("../models/Product.model")


async function getProductCount(req,res){
    
    try{
        const products = await Product.countDocuments({
            name: { $regex: req.query.name, $options: "i" }, // "i" for case-insensitive
            price: { $gte: req.query.minPrice, $lte: req.query.maxPrice }
        });
        res.status(200).json(products.length);
    }
    catch(err){
        res.status(500).json(err);
    }
}
async function getProducts(req, res){
    const name = req.query.name || "";
    const minPrice = parseFloat(req.query.minPrice) || 0;
    const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_SAFE_INTEGER;
    const page = req.query.page?parseInt(req.query.page)-1: 0;
    const limit = parseInt(req.query.limit) || 0;
    try{
        const products = await Product.find({
            name: { $regex: name, $options: "i" }, // "i" for case-insensitive
            price: { $gte: minPrice, $lte: maxPrice }
        }).skip(page*limit).limit(limit);
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
}

function getProductById(req, res){
    const {id} = req.params;
    const products = [...PRODUCTS]
    const product = products.find(product => product._id == id);
    res.status(200).json(product);
}

function deleteProduct(req,res){
    const {id} = req.params;
    const products = [...PRODUCTS]
    const product = products.find(product => product._id == id);
    const index = products.indexOf(product);
    products.splice(index,1);
    fs.writeFileSync("./data/product.json", JSON.stringify(products));
    res.status(200).json({"message": "Success deleted"});
}

function createProduct(req, res){
    const products = [...PRODUCTS]
    const product = req.body;
    products.push(product);
    fs.writeFileSync("./data/product.json", JSON.stringify(products));
    res.status(200).json({"message": "Success created"});
}

function editProduct(req, res) {
    const {id} = req.params;
    const products = [...PRODUCTS]
    const product = products.find(product => product._id == id);
    const index = products.indexOf(product);
    const newProd = req.body

    products.splice(index,1,{...product,...newProd});
    fs.writeFileSync("./data/product.json", JSON.stringify(products));
    res.status(200).json({"message": "Success edited"});
}

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    editProduct,
};