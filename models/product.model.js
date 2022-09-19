import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
    name : {
        type: String
    },
    size : {
        type : String
    },
    description : {
        type : String
    },
    brand : {
        type : String
    },
    color : {
        type : String
    },
    availableQuanty : {
        type : Number
    },
    price :{
        type : Number
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    subcategoryId:{
        type:Schema.Types.ObjectId,
        ref:'SubCategory'
    }
    
});
const Product = mongoose.model('Product',schema);
export default Product;