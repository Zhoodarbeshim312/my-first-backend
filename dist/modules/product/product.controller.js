"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("./product.service"));
class ProductController {
    handleError(res, error, action) {
        return res.status(500).json({
            success: false,
            message: `The server crashed due to the ${action}.`,
            error: error instanceof Error ? error.message : String(error),
        });
    }
    create = async (req, res) => {
        try {
            const { url_image, title, description } = req.body;
            if (!url_image?.trim() || !title?.trim() || !description?.trim()) {
                return res.status(400).json({
                    success: false,
                    message: "Поля url_image, title и description обязательны!",
                });
            }
            const product = await product_service_1.default.create({
                url_image,
                title,
                description,
            });
            return res.status(201).json({ success: true, data: product });
        }
        catch (error) {
            return this.handleError(res, error, "Create");
        }
    };
    find = async (req, res) => {
        try {
            const id = req.params.id;
            const product = await product_service_1.default.findById(id);
            if (!product) {
                return res
                    .status(404)
                    .json({ success: false, message: "Продукт не найден." });
            }
            return res.status(200).json({ success: true, data: product });
        }
        catch (error) {
            return this.handleError(res, error, "Find");
        }
    };
    findAll = async (req, res) => {
        try {
            const products = await product_service_1.default.findAll();
            return res.status(200).json({ success: true, data: products });
        }
        catch (error) {
            return this.handleError(res, error, "FindAll");
        }
    };
    put = async (req, res) => {
        try {
            const id = req.params.id;
            const { url_image, title, description } = req.body;
            if (!url_image?.trim() || !title?.trim() || !description?.trim()) {
                return res.status(400).json({
                    success: false,
                    message: "Поля url_image, title и description обязательны!",
                });
            }
            const product = await product_service_1.default.update(id, {
                url_image,
                title,
                description,
            });
            return res.status(200).json({ success: true, data: product });
        }
        catch (error) {
            return this.handleError(res, error, "Put");
        }
    };
    patch = async (req, res) => {
        try {
            const id = req.params.id;
            const { url_image, title, description } = req.body;
            const data = {};
            if (url_image?.trim())
                data.url_image = url_image;
            if (title?.trim())
                data.title = title;
            if (description?.trim())
                data.description = description;
            if (Object.keys(data).length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Нужно передать хотя бы одно поле для обновления.",
                });
            }
            const product = await product_service_1.default.partialUpdate(id, data);
            return res.status(200).json({ success: true, data: product });
        }
        catch (error) {
            return this.handleError(res, error, "Patch");
        }
    };
    del = async (req, res) => {
        try {
            const id = req.params.id;
            await product_service_1.default.delete(id);
            return res
                .status(200)
                .json({ success: true, message: "Продукт успешно удалён." });
        }
        catch (error) {
            return this.handleError(res, error, "Delete");
        }
    };
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map