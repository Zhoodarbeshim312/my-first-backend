import { Router } from "express";
import productController from "./product.controller";

const router = Router();

router.post("/create", productController.create);
router.get("/find-all", productController.findAll);
router.get("/find/:id", productController.find);
router.put("/put/:id", productController.put);
router.patch("/patch/:id", productController.patch);
router.delete("/del/:id", productController.del);

export default router;
