import orderModel from "../orderModel.js";
import userModel from "../userModel.js";


const placeOrder = async(req,res)=>{
    
    const {userId,items,amount,address} = req.body;
        
        try{
    const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
    }
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId,{cartData:{}})
    res.json({sucess:true , MSG:"Order Placed"})
} catch (error) {
    return res.json(error)
}
    
}

export default placeOrder