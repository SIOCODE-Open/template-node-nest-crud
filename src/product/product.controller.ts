import {
    Controller,
    Get,
    Req,
    Post,
    Delete,
    Body,
    Query,
    Param,
} from "@nestjs/common";
import { ProductService, INewProduct, IProduct } from "./product.service";

@Controller("backend/v1/product")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAll() {
        return await this.productService.listAll();
    }

    @Post()
    async create(@Body() newProduct: INewProduct) {
        return await this.productService.create(newProduct);
    }

    @Get(":id")
    async getOne(@Param("id") id: string) {
        return await this.productService.getById(id);
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return await this.productService.deleteById(id);
    }

    @Post(":id/name")
    async updateName(@Param("id") id: string, @Body() name: string) {
        return await this.productService.updateName(id, name);
    }

    @Delete(":id/name")
    async clearName(@Param("id") id: string) {
        return await this.productService.clearName(id);
    }
    @Post(":id/description")
    async updateDescription(
        @Param("id") id: string,
        @Body() description: string
    ) {
        return await this.productService.updateDescription(id, description);
    }

    @Delete(":id/description")
    async clearDescription(@Param("id") id: string) {
        return await this.productService.clearDescription(id);
    }

    @Post(":id/manufacturer")
    async updateManufacturer(
        @Param("id") id: string,
        @Body() manufacturerId: string
    ) {
        return await this.productService.updateManufacturer(id, manufacturerId);
    }

    @Delete(":id/manufacturer")
    async clearManufacturer(@Param("id") id: string) {
        return await this.productService.clearManufacturer(id);
    }
}
