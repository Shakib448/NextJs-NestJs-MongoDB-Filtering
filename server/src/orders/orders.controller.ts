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
  async deleteCats() {
    this.orderService.deleteOrders();
  }

  @Get()
  async getAllCats(@Query() query: string) {
    return await this.orderService.findAll(query);
  }
}
