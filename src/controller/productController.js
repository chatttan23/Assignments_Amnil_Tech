import { Product } from "../schema/model.js"

export let createProduct = async(req,res)=>{
    try {

        let data = req.body
        let result = await Product.create(data)
        res.json({success: true, messaage : "Successfully created Product", result: result })
    } catch (error) {
        res.json({ success:false,  message : error.message  })
        }
}

export let searchProductByName = async (req, res) => {
    try {
      let search = req.params.name;
      let products = await Product.find();
      let foundProducts = products.filter((product) => {
        if (product.name.includes(search)) {
          return true;
        } else if (product.description.includes(search)) {
          return true;
        } else {
          return false;
        }
      });
      console.log(foundProducts);
      if (foundProducts.length >= 0) {
        res.status(200).json({
          success: true,
          message: "Products searched successfully",
          result: foundProducts,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Products not found",
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };


export let getAllProduct = async (req,res)=>{
    try {
        let products= await Product.find()
        res.status(200).json({ success : true , message : 'Products fetched successfully' , products })
    }catch(err){
        res.status(400).json({ success : false , message : err.message})
    }
 }
 
 export let updateProduct= async(req,res)=>{
    try {
        let id= req.params.id;
        let data=req.body;
        let result= await Product.findByIdAndUpdate(id, data, {new:true});
        delete data.product_type;
        res.status(200).json({
            success:true,
            messaage:"Updated specific  product Successfully",
            data:result,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
 }
 
 export let deleteProduct= async (req,res) =>{
    try {
        let id=req.params.id;
        let result= await Product.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Selected Product deleted successfully",
            data:result
        })
        } catch (error) {
        res.json({success:false, message: error.message})
    }
 }



 //retrieve specific product by id
 export let retrieveBySpecificId = async(req,res)=>{
    try {
        let id=req.params.id;
        let result= await Product.findById(id);
        res.status(200).json({
            success:true,
            message:`Found the product with that ID ${id}`,
            data:result
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"No product found with that ID"
           })
    }
 }