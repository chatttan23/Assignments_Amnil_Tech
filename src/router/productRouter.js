import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, retrieveBySpecificId, searchProductByName, updateProduct } from "../controller/productController.js";

let productRouter = Router()

productRouter.route('/').post(createProduct)
productRouter.route('/:name').get(searchProductByName)

productRouter.route('/').get(getAllProduct)

productRouter.route('/:id').patch(updateProduct)
productRouter.route('/:id').delete(deleteProduct)

productRouter.route('/:id').get(retrieveBySpecificId)


export default productRouter

