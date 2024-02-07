import { Schema } from "mongoose";
let userSchema= Schema({
    name:{
        type:String
    },
    email:{
        type :String, unique:true
    },  
    password:{
       type: String
    } 
},
{
    timestamps: true
},
)
export default  userSchema; 