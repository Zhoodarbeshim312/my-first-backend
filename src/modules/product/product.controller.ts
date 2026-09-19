import { Request, Response } from "express";
import productService from "./product.service";

class ProductController {
  private handleError(res: Response, error: unknown, action: string): Response {
    return res.status(500).json({
      success: false,
      message: `The server crashed due to the ${action}.`,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { url_image, title, description } = req.body;
      if (!url_image?.trim() || !title?.trim() || !description?.trim()) {
        return res.status(400).json({
          success: false,
          message: "Поля url_image, title и description обязательны!",
        });
      }
      const product = await productService.create({
        url_image,
        title,
        description,
      });
      return res.status(201).json({ success: true, data: product });
    } catch (error) {
      return this.handleError(res, error, "Create");
    }
  };

  find = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id as string;
      const product = await productService.findById(id);
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Продукт не найден." });
      }
      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      return this.handleError(res, error, "Find");
    }
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const products = await productService.findAll();
      return res.status(200).json({ success: true, data: products });
    } catch (error) {
      return this.handleError(res, error, "FindAll");
    }
  };

  put = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id as string;
      const { url_image, title, description } = req.body;
      if (!url_image?.trim() || !title?.trim() || !description?.trim()) {
        return res.status(400).json({
          success: false,
          message: "Поля url_image, title и description обязательны!",
        });
      }

      const product = await productService.update(id, {
        url_image,
        title,
        description,
      });
      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      return this.handleError(res, error, "Put");
    }
  };

  patch = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id as string;
      const { url_image, title, description } = req.body;
      const data: Record<string, string> = {};
      if (url_image?.trim()) data.url_image = url_image;
      if (title?.trim()) data.title = title;
      if (description?.trim()) data.description = description;
      if (Object.keys(data).length === 0) {
        return res.status(400).json({
          success: false,
          message: "Нужно передать хотя бы одно поле для обновления.",
        });
      }
      const product = await productService.partialUpdate(id, data);
      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      return this.handleError(res, error, "Patch");
    }
  };

  del = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id as string;
      await productService.delete(id);
      return res
        .status(200)
        .json({ success: true, message: "Продукт успешно удалён." });
    } catch (error) {
      return this.handleError(res, error, "Delete");
    }
  };
}

export default new ProductController();
