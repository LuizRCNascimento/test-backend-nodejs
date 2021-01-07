const express = require("express");
const router = express.Router();
const ProductController = require ('../controller/product-controller');
const checkauth = require ('../middleware/check-auth');

router.post("/", ProductController.Add_meth);

//As a user I would like to be able to access the list of all products DONE!!
router.get('/', ProductController.Products_Get_All);

//As a user I would like to be able to filter products by name
router.get('/:id', ProductController.View_Product_Details);

//I as a user would like to be able to update the product data
router.patch('/:id', ProductController.Update_Product);

//I as a user would like to be able to delete a product from my catalog
router.delete('/:id', ProductController.Delete_Product); // add middleware to prevent wrong action

module.exports = router;

// missing item below:
// I as a user would like to be able to associate and edit a product category
