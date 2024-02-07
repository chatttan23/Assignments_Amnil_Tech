import { Schema } from "mongoose";

let orderSchema = Schema(
  {
    productId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    product_type: {
      type: String
    },
  },
  {
    timestamps: true,
  }
)
export default orderSchema