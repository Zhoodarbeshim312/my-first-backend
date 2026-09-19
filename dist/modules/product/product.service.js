"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../config/prisma");
class ProductService {
    async create(data) {
        return prisma_1.prisma.product.create({ data });
    }
    async findById(id) {
        return prisma_1.prisma.product.findUnique({ where: { id } });
    }
    async findAll() {
        return prisma_1.prisma.product.findMany();
    }
    async update(id, data) {
        return prisma_1.prisma.product.update({ where: { id }, data });
    }
    async partialUpdate(id, data) {
        return prisma_1.prisma.product.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.prisma.product.delete({ where: { id } });
    }
}
exports.default = new ProductService();
//# sourceMappingURL=product.service.js.map