import { OrderDocument } from './../schemas/order.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import order from '../../data/order.data';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Orders') private orderModel: Model<OrderDocument>,
  ) {}

  async createOrders(): Promise<any> {
    await this.orderModel.insertMany(order);
  }

  async deleteOrders(): Promise<any> {
    await this.orderModel.deleteMany();
  }

  async findAll(): Promise<any> {
    return this.orderModel.find();
  }
}
