import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductCreateDto } from './dto/product-create.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('admin/products')
  async all() {
    return this.productService.find();
  }

  @Post('admin/products')
  async create(@Body() body: ProductCreateDto) {
    return this.productService.save(body);
  }

  @Get('admin/products/:id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne({ id });
  }

  @Put('admin/products/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ProductCreateDto,
  ) {
    await this.productService.update(id, body);

    return this.productService.findOne({ id });
  }

  @Delete('admin/products/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
