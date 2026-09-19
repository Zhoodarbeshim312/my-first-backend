interface CreateProductDto {
    url_image: string;
    title: string;
    description: string;
}
interface UpdateProductDto {
    url_image?: string;
    title?: string;
    description?: string;
}
declare class ProductService {
    create(data: CreateProductDto): Promise<{
        id: string;
        url_image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findById(id: string): Promise<{
        id: string;
        url_image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findAll(): Promise<{
        id: string;
        url_image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, data: CreateProductDto): Promise<{
        id: string;
        url_image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    partialUpdate(id: string, data: UpdateProductDto): Promise<{
        id: string;
        url_image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        url_image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
declare const _default: ProductService;
export default _default;
