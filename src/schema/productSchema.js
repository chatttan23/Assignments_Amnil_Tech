import { Schema } from "mongoose";
let productSchema= Schema(
    {
    name:{ 
        type: String
    },
    description:{ 
        type: String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    product_type:{
        type :String 
    }

})
export default productSchema