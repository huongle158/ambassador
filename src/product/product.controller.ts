import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { ProductCreateDto } from './dto/product-create.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Get('admin/products')
  async all() {
    return this.productService.find();
  }

  @UseGuards(AuthGuard)
  @Post('admin/products')
  async create(@Body() body: ProductCreateDto) {
    return this.productService.save(body);
  }

  @UseGuards(AuthGuard)
  @Get('admin/products/:id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne({ id });
  }

  @UseGuards(AuthGuard)
  @Put('admin/products/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ProductCreateDto,
  ) {
    await this.productService.update(id, body);

    return this.productService.findOne({ id });
  }

  @UseGuards(AuthGuard)
  @Delete('admin/products/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
