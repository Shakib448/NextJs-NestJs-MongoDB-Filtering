import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  findAll(): string {
    return 'This action return all cats';
  }
}
