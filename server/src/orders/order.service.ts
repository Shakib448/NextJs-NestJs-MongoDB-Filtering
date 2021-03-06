import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order, OrderDocument } from '../schemas/order.schema';
import order from '../../data/order.data';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async createOrders(): Promise<any> {
    await this.orderModel.insertMany(order);
  }

  async deleteOrders(): Promise<any> {
    await this.orderModel.deleteMany();
  }

  async findAll(query): Promise<Order[]> {
    const status = query.status ? { status: { $in: query.status } } : {};
    const payment = query.payment
      ? { paymentMethod: { $in: query.payment } }
      : {};
    const orderLimit = query.orderLimit ? query.orderLimit : '';
    return await this.orderModel
      .find({
        ...status,
      })
      .where({ ...payment })
      .limit(+orderLimit)
      .exec();
  }
}
