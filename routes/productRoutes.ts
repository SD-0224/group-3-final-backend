import express from "express";
import {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  getProductsByBrandId,
  createNewProduct,
  getNewArrivals,
  getHandPickedProducts,
  getLimitedEditionProducts,
  getOnSaleProducts,
  getPopularProducts,
  filterProductsWithSearch,
} from "../controllers/productController";

const router = express.Router();

router.get("/new-arrivals", getNewArrivals);
router.get("/handpicked", getHandPickedProducts);
router.get("/limited-edition", getLimitedEditionProducts);
router.get("/on-sale", getOnSaleProducts);
router.get("/popular", getPopularProducts);

router.get("/", getAllProducts);
router.get("/category/:id", getProductsByCategoryId);
router.get("/brand/:id", getProductsByBrandId);
router.get("/search/:query", filterProductsWithSearch);

router.get("/:id", getProductById);
router.post("/", createNewProduct);

export default router;
