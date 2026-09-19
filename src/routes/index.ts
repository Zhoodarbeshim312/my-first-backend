import { Router } from "express";
import productModule from "../modules/product/product.module";
const globalRouter = Router();
globalRouter.use("/products", productModule);
export default globalRouter;
