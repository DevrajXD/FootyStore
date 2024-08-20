 const express = require("express");
const { getAllProducts,CreateProduct, updateProduct, deleteProduct, getProductDetails, CreateProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
 const router= express.Router();


 router.route("/products").get(getAllProducts);

 router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"), CreateProduct);

 router.route("/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),  updateProduct)
 router.route("/product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),  deleteProduct)
 router.route("/product/:id").get(getProductDetails);

 router.route("/review").put(isAuthenticatedUser, CreateProductReview);
 router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)


 //module.exports = route("/products").get(getAllProducts);

 module.exports = router 