import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';

import { OrderService } from './order.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard)
  @Get('admin/orders')
  all() {
    return this.orderService.findWithRelationOrderItems('order_items');
  }
}
