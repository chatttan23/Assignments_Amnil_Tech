import { Order } from "../schema/model.js";


export let createOrder = async (req, res) =>{

}

export let retrieveAllOrder = async  (req, res) => {
    try{
        const orders = await Order.find();
        if(!orders){
            return res.json({ msg: 'No Orders Found'})
        }else{
            return res.json({msg:"Orders List", orders});
        }
        
    }catch(error){
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}
