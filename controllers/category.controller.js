import Category from "../models/category.model"

export const insertCategory = function(req,res){
    const categoryData = {
        name : req.body.name,
    }

   Category.create(categoryData, function(err,data){
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

export const categorylist = function(req,res){
    Category.find(function(err,categories){
        res.send(categories)
    });
};

export const updatecategory = function (req,res){
    Category.updateOne({_id:req.params.id},{name:req.body.name}, function(err,result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
};