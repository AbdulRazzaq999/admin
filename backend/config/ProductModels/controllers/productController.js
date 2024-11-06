    import {v2 as cloudinary} from 'cloudinary';
    import productModel from '../productModel.js'
import { model } from 'mongoose';
    //add product 
    const addProduct = async (req,res) =>{
        
            try {
                
                const {name,description,price,category,subCategory,bestseller,sizes}=req.body;
                const image1 = req.files.image1 && req.files.image1[0]
                const image2 = req.files.image2 && req.files.image2[0]
                const image3 = req.files.image3 && req.files.image3[0]
                const image4 = req.files.image4 && req.files.image4[0]
                
                const images = [image1,image2,image3,image4].filter((item=>item !== undefined));

                const imagesURL =await Promise.all(
                    images.map(async(item)=>{
                            const result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                            return result.secure_url;
                    })
                )
                
                

                const product ={
                    name,
                    bestseller:bestseller === "true"?true :false,
                    price,
                    category,
                    subCategory,
                    description,
                    sizes:JSON.parse(sizes),
                    image:imagesURL,
                    date: Date.now()
                
                    
                };
            
                
                const mod = new productModel(product);
                await mod.save();
                return res.json({success:true,MSG:"Saved"})
                
            } catch (error) {
                return res.json({success:false,MSG:"Not Saved"})
            }
            
        // try {
        // const {name,description,price,category,subCategory,sizes,bestseller} = req.body;

        // const image1 = req.files.image1 && req.files.image1[0];
        // const image2 = req.files.image2 && req.files.image2[0];
        // const image3 = req.files.image3 && req.files.image3[0];
        // const image4 = req.files.image4 && req.files.image4[0];

        // const images = [image1,image2,image3,image4].filter((item)=>item !== undefined);

        // const imagesURL = await Promise.all(
        //     images.map(async(item)=>{
        //         let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
        //         return result.secure_url
        //     }) 

        // )
        // const productData = {
        //     name,
        //     description,
        //     // price:Number(price),
        //     // category,
        //     // subCategory,
        //     // bestseller : bestseller === "true" ? true : false,
        //     // sizes : JSON.parse(sizes),
        //     // image: imagesURL,
        //     // date: Date.now()
        // }
        // console.log(productData);

        // const product = new productModel(productData);
        // await product.save();
        
        // res.json(("product Added Successfully"))

        //     // console.log(name,description,price,category,subCategory,sizes,bestseller);
        //     // console.log(imagesURL);
        //     // return res.json({})
            
            
        // } catch (error) {
        //     return res.json("Product not added")
        // }
        

    }

        //list product
        const listProduct =async(req,res)=>{
            
            const products = await productModel.find({});
            return res.json(({products}));
        }

        //delete product
        const deleteProduct = async(req,res)=>{
            await productModel.findByIdAndDelete(req.body.id);
            return res.json(({MSG: "Product Removed"}))
        }

        //single Product
        const singleProduct = async(req,res)=>{
           
            const {product_id} = req.body;
            const product = await productModel.findById(product_id);
            return res.json({MSG:product});
        }
    export {addProduct,listProduct,deleteProduct,singleProduct};