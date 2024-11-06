import jwt from 'jsonwebtoken';

const AuthUser = async(req,res,next)=>{
    const { token } = req.headers
    


    if(!token)
    {
        return res.json({success:false,MSG:"Not Authorized Please Login"});
    }
    try {
            const decodeToken = jwt.verify(token,process.env.Secret_token)
            req.body.userId= decodeToken.id;
            next()
           
            
            
    } catch (error) {
        console.log(error);
        
    }
}
export default AuthUser;