import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/ProductController.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.post('/', createProduct)
router.put('/:id',  deleteProduct)

export default router;