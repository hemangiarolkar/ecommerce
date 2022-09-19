import SubCategory from "../models/subcategory.model";
import Category from "../models/subcategory.model"

export const addsubcategory = function(req,res){
    const subcategoryData = {
        name : req.body.name,
        categoryId :req.body.categoryId
    }

   Category.create(subcategoryData, function(err,data){
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


export const subcategorylist = function(req,res){
    SubCategory.find(function(err,subcategories){
        res.send(subcategories)
    });
};

export const updatesubcategory = function (req,res){
    SubCategory.updateOne({_id:req.params.id},{name:req.body.name}, function(err,result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
};