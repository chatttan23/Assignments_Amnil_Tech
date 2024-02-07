import express, { json } from "express"
import cors from "cors"
import connectToMongoDb from "./src/database/connectToMongoDb.js"
import port from "./src/config.js"
import productRouter from "./src/router/productRouter.js"
import userRouter from "./src/router/userRouter.js"
import { config } from "dotenv"
import orderRouter from "./src/router/orderRouter.js"
const expressApp = express()

expressApp.use(json())//index ko top ma always

connectToMongoDb()
config()
expressApp.use(cors())//cross origin resource sharing- to connect with front end
expressApp.listen(port,() =>{
    console.log(`Listening to port ${ port }`)
})


expressApp.use("/products",productRouter)
expressApp.use("/getAllProduct",productRouter)
expressApp.use("/delete-product",productRouter)
expressApp.use("/update-product",productRouter)
expressApp.use("/get-product-by-id",productRouter)
expressApp.use("/search-product",productRouter)

expressApp.use("/create-user", userRouter)
expressApp.use("/get-user", userRouter)
expressApp.use("/delete-user", userRouter)
expressApp.use("/update-user", userRouter)


expressApp.use("/get-order", orderRouter)
