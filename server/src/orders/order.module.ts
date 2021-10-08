import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrderController } from './orders.controller';
import { OrderSchema } from '../schemas/order.schema';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Orders', schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
