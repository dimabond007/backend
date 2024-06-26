const express = require('express');

const { getProducts, getProductById, deleteProduct, createProduct, editProduct } = require('../controllers/product.controller');

const router = express.Router();

router.get('/',getProducts)
router.get('/:id',getProductById)
router.delete('/:id',deleteProduct)
router.post('/',createProduct)
router.put('/:id',editProduct)

module.exports = router;