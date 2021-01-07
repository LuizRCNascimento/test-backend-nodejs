//const express = require("express"); 
//const {secret} = require('../config/config');
//const http = require ('http');
const mongoose = require("mongoose");
const Categories = require ('../models/category-models');

//Add new Categories -- DONE!!
exports.Add_meth = (req,res,next) => {
    const category = new Categories({
        _id: new mongoose.Types.ObjectId(),
        categorydesc: req.body.categorydesc
      });
      category
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Category added",
            NewCategory: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
            });
        });
    }

//As a user I would like to be able to access the list of all categories DONE!!
exports.Category_Get_All = (req,res,next) => {
    Categories.find()
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

//As a user I would like to be able to filter categories --DONE!!
exports.View_Category_Details = (req,res,next) => {
    Categories.find({_id : req.params.id})
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
            errors: err,
            usuario: req.params.name,
            identif: id
        });
    });
} 

//I as a user would like to be able to update the category data
exports.Update_Category = (req,res,next) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops in req.body) {
        updateOps[ops.categorydesc]=ops.value;
    } 
    Categories.update({ _id:id }, { $set: updateOps })
        .select("_id")
        .exec()
        .then(result => {
            res.status(200).json({
                message:"Category updated"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(100).json({
                    erro: err
        });
    });
}

//I as a user would like to be able to delete a category -- Done!!
exports.Delete_Category = (req,res,next) => {
    const id = req.params.id;
    Categories.remove({ _id:id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Category successfully removed'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                    erro: err
        });
    });
}