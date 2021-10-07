import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../schemas/order.schema';
import order from '../../data/order';

import { Seeder, DataFactory } from 'nestjs-seeder';

@Injectable()
export class OrderSeeder {
  constructor(
    @InjectModel(Order.history.date) private readonly ordeR: Model<Order>,
  ) {}

  async seed(): Promise<any> {
    const productOrder = DataFactory.createForClass(Order).generate(10);

    return this.ordeR.insertMany(productOrder);
  }
  async drop(): Promise<any> {
    return this.ordeR.deleteMany({});
  }
}
