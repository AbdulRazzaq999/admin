import userModel from '../userModel.js'
const addToCart =async(req,res)=>{  
    
    const {userId,itemId,size} = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;
    if(cartData[itemId])
    {
        if(cartData[itemId][size])
        {
            cartData[itemId][size] +=1;
        }
        else
        {
            cartData[itemId][size]= 1;
        }
    }
    else
    {
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }
    
    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({sucess:true ,MSG:"Added to Cart"})
    
}


const updateCart = async(req,res)=>{
    
    const {userId,itemId,size,quantity} = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({sucess:true,MSG:"Cart Updated"})
}


const getUserCart =async(req,res)=>{
    const {userId} = req.body;
    try {
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        return res.json({success:true,cartData})
    } catch (error) {
            console.log(error);
            
    }
    
    
    
    // const userData = await userModel.findById(userId);
    // let cartData = await userData.cartData;

    // return res.json({sucess:true,cartData})
    
}

export {addToCart,updateCart,getUserCart}