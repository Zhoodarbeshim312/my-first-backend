import { prisma } from "../../config/prisma";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

class ProductService {
  async create(data: CreateProductDto) {
    return prisma.product.create({ data });
  }
  async findById(id: string) {
    return prisma.product.findUnique({ where: { id } });
  }
  async findAll() {
    return prisma.product.findMany();
  }
  async update(id: string, data: CreateProductDto) {
    return prisma.product.update({ where: { id }, data });
  }
  async partialUpdate(id: string, data: UpdateProductDto) {
    return prisma.product.update({ where: { id }, data });
  }
  async delete(id: string) {
    return prisma.product.delete({ where: { id } });
  }
}

export default new ProductService();
