import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type:String}, //true
    description: { type:String},//true
    price  : { type : Number},
    image : { type : Array},
    category: {type:String}, //true
    subCategory:{type:String},//true
    sizes:{type:Array},
    bestseller:{type:Boolean},
    date:{type : Number} //true

})
const productModel = mongoose.models.product|| mongoose.model("product",ProductSchema)

export default productModel;