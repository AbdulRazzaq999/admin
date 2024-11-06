import validator from "validator";
import bcrypt from 'bcrypt';
import userModel from "../userModel.js";
import jwt from 'jsonwebtoken';

const createToken = (id)=>{
    return jwt.sign({id},process.env.Secret_token)
}
            //login user
const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user)
    {
        return res.json({success:false,MSG:"User Not found"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch)
    {
        const token= createToken(user._id);
        return res.json({success:true,token});
    }
    else{
        return res.json({success:false,MSG:"Invalid Crdentials"})
    }
  
    } catch (error) {
        console.log(error);
        
        
    }
}

const registerUser = async(req,res)=>{
    try {
        
    const {name,email,password} = req.body;

    const exists = await userModel.findOne({email});
    if(exists){
        return res.json({ success:false, MSG: "Email Already Exists"})
    }
    if(!validator.isEmail(email))
    {
        return res.json({success:false, MSG: "Email Not Found"})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser =  new userModel({
        name,
        email,
        password:hashedPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})

        
    } catch (error) {
        console.log(error);
        
    }



}

const adminUser = async(req,res)=>{
    const {email,password} = req.body;

    if(email === process.env.ADMIN && password === process.env.ADMIN1)
    {
        const token = jwt.sign(email+password,process.env.Secret_token);
        res.json({success:true,token})
    }
    else
    {
        return res.json({MSG:"Invalid"})
    }
    
   

    
}

export {loginUser,registerUser,adminUser}
