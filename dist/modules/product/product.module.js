"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./product.controller"));
const router = (0, express_1.Router)();
router.post("/create", product_controller_1.default.create);
router.get("/find-all", product_controller_1.default.findAll);
router.get("/find/:id", product_controller_1.default.find);
router.put("/put/:id", product_controller_1.default.put);
router.patch("/patch/:id", product_controller_1.default.patch);
router.delete("/del/:id", product_controller_1.default.del);
exports.default = router;
//# sourceMappingURL=product.module.js.map