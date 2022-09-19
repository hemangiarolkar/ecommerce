import Product from "../models/product.model";


export const addproduct = function(req,res){
    const productData = {
        name : req.body.name,
        size : req.body.size,
        brand :req.body.brand,
        color :req.body.color,
        availableQuanty:parseInt(req.body.availableQuanty),
        price :parseInt(req.body.price),
        categoryId:req.body.categoryId,
        subcategoryId:req.body.subcategoryId,

     
    }

   Product.create(productData, function(err,data){
       if(err){
           return res.status(500).json({
               message:"Something went wrong.",
               status:false
           });
       }
       return res.status(200).json({
           message:'success',
           data:data,
           status:true
       });
   });
}

export const productlist = function(req,res){
    Product.find(function(err,allproducts){
        res.send(allproducts)
    });
};

export const updateproduct = function (req,res){
    Product.updateOne({_id:req.params.id},{name:req.body.name}, function(err,result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
};