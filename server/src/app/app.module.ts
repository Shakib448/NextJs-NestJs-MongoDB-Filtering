import { Module } from '@nestjs/common';
import { OrdersController } from 'src/orders/orders.controller';

@Module({
  imports: [],
  controllers: [OrdersController],
})
export class AppModule {}
