"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_module_1 = __importDefault(require("../modules/product/product.module"));
const globalRouter = (0, express_1.Router)();
globalRouter.use("/products", product_module_1.default);
exports.default = globalRouter;
//# sourceMappingURL=index.js.map