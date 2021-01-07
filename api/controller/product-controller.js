const http = require ('http');
const mongoose = require("mongoose");
const Products = require ('../models/product-models');

//Add new product -- DONE!!
exports.Add_meth = (req,res,next) => {
    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category  //Front-End may validate this field with Category MongoDb Collection
      });
      product
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Product added",
            createdProduct: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
            });
        });
    }

//As a user I would like to be able to access the list of all products -- DONE!!
exports.Products_Get_All = (req,res,next) => {
    Products.find()
        .exec()
        .then(docs => { 
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }

//As a user I would like to be able to filter products by name -- DONE!!
exports.View_Product_Details = (req, res, next) => {
    const id = req.params.id;
    Products.find({_id : id})
    .exec()
    .then(doc => {
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message:"Wrong data entry"})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            errors: err
        });
    });
} 

//I as a user would like to be able to update the product data
exports.Update_Product = (req,res,next) => {
    const id = req.params.id;
    let body = req.body;
    const updateOps = {};
    for (const ops in req.body) {
        updateOps[ops.category]=ops.value;
    } 
    Products.update({ _id:id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message:"Product updated"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(100).json({
                    erro: err
        });
    });
}

//I as a user would like to be able to delete a product from my catalog -- DONE!!
exports.Delete_Product = (req,res,next) => {
    Products.remove({ _id:req.params.id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Product successfully removed"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                    erro: err
        });
    });
}