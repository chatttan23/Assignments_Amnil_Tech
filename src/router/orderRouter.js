import { Router } from "express";
import { retrieveAllOrder } from "../controller/orderController.js";

let orderRouter= Router()
orderRouter.route('/order').get(retrieveAllOrder)

export default orderRouter
