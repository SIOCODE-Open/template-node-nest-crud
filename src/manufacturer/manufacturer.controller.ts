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
import {
    ManufacturerService,
    INewManufacturer,
    IManufacturer,
} from "./manufacturer.service";

@Controller("backend/v1/manufacturer")
export class ManufacturerController {
    constructor(private readonly manufacturerService: ManufacturerService) {}

    @Get()
    async getAll() {
        return await this.manufacturerService.listAll();
    }

    @Post()
    async create(@Body() newManufacturer: INewManufacturer) {
        return await this.manufacturerService.create(newManufacturer);
    }

    @Get(":id")
    async getOne(@Param("id") id: string) {
        return await this.manufacturerService.getById(id);
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return await this.manufacturerService.deleteById(id);
    }

    @Post(":id/name")
    async updateName(@Param("id") id: string, @Body() name: string) {
        return await this.manufacturerService.updateName(id, name);
    }

    @Delete(":id/name")
    async clearName(@Param("id") id: string) {
        return await this.manufacturerService.clearName(id);
    }
    @Post(":id/description")
    async updateDescription(
        @Param("id") id: string,
        @Body() description: string
    ) {
        return await this.manufacturerService.updateDescription(
            id,
            description
        );
    }

    @Delete(":id/description")
    async clearDescription(@Param("id") id: string) {
        return await this.manufacturerService.clearDescription(id);
    }
    @Post(":id/website")
    async updateWebsite(@Param("id") id: string, @Body() website: string) {
        return await this.manufacturerService.updateWebsite(id, website);
    }

    @Delete(":id/website")
    async clearWebsite(@Param("id") id: string) {
        return await this.manufacturerService.clearWebsite(id);
    }
}
