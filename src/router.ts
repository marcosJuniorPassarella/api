import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        }
    })
});

//List categories
router.get('/categories', listCategories);
//Create categories
router.post('/categories', createCategory);
//List products
router.get('/products', listProducts);
//Create products
router.post('/products', upload.single('image'), createProducts);
//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});
//List orders
router.get('/orders', (req, res) => {
    res.send('OK');
});
//Create order
router.post('/orders', (req, res) => {
    res.send('OK');
});
//Change order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});
// Delete/cancel order
router.delete('/order/:orderId', (req, res) => {
    res.send('OK');
});