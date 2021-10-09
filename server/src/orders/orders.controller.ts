import { Controller, Post, Get, Delete, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('insert')
  async create() {
    this.orderService.createOrders();
  }

  @Delete('delete')
  async deleteOrders() {
    this.orderService.deleteOrders();
  }

  @Get()
  async getAllOrders(@Query() query: string) {
    return await this.orderService.findAll(query);
  }
}
