import { Controller, Post, Get, Delete } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getAllCats() {
    this.orderService.findAll();
  }

  @Post('insert')
  async create() {
    this.orderService.createOrders();
  }

  @Delete('delete')
  async deleteCats() {
    this.orderService.deleteOrders();
  }
}
