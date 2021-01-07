const express = require("express");
const router = express.Router();
const CategoryController = require ('../controller/category-controller');
const checkauth = require ('../middleware/check-auth');


router.post("/", CategoryController.Add_meth);

//As a user I would like to be able to access the list of all categories DONE!!
router.get('/', CategoryController.Category_Get_All);

//As a user I would like to be able to filter products by name
router.get('/:id', CategoryController.View_Category_Details);

//I as a user would like to be able to update the product data
router.patch('/:id', CategoryController.Update_Category);

//I as a user would like to be able to delete a product from my catalog
router.delete('/:id', CategoryController.Delete_Category); // add middleware to prevent wrong action

module.exports = router;

// missing items below:
// I as a user would like to be able to edit a product category
