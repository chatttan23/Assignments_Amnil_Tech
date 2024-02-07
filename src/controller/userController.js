
import { User } from "../schema/model.js";

//create users
export let createNewUser = async(req,res)=>{
    try{
        let data= req.body
        let result= await User.create(data)
        res.json({success:true, message:"user created", result:result})
    }
    catch(error){
        res.json({success:false, message:error.message})
    }
}
//retrieve all users
export let getAllUsers= async (req,res)=>{
    try {
        let users= await User.find()
        res.status(200).json({success:true, message:"Users fetched Successfully", users})
    }
    catch(error){
        res.status(400).json({success:false, message:error.message})
    }
}
//update Users
export let updateUser= async (req,res)=>{
    try {
        let _id = req.params.id;
        let data = req.body;
        delete data.email;
        delete data.password;
        let result = await User.findByIdAndUpdate(_id, data, { new: true });
        res.status(201).json({
          success: true,
          message: "Profile Updated successfully",
          data: result,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    };
    
//delete Users
export let deleteUsers = async(req, res)=>{
    try {
        let _id= req.params.id;
        let result = await User.findByIdAndDelete(_id);
    res.status(200).json({
      success: true,
      message: "deleted Specific User successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
}
}

