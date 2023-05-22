import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('admin/orders')
  all() {
    return this.orderService.findWithRelationOrderItems('order_items');
  }
}
