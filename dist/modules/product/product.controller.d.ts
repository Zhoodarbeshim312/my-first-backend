import { Request, Response } from "express";
declare class ProductController {
    private handleError;
    create: (req: Request, res: Response) => Promise<Response>;
    find: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    put: (req: Request, res: Response) => Promise<Response>;
    patch: (req: Request, res: Response) => Promise<Response>;
    del: (req: Request, res: Response) => Promise<Response>;
}
declare const _default: ProductController;
export default _default;
