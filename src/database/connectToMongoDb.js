import mongoose from "mongoose";



const connectToMongoDb = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/amnil_product");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};



export default connectToMongoDb;

