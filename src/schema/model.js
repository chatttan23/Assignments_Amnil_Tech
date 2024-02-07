import { model } from "mongoose";

import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import orderSchema from "./orderSchema.js";

export let  User = model("User", userSchema);
export let Product = model("Product", productSchema);
export let Order = model("Order", orderSchema)
