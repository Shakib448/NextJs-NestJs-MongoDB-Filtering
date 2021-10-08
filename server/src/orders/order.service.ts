// import { Injectable } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { OrderDocument } from 'src/schemas/order.schema';
// import order from '../../data/order';

// @Injectable()
// export class OrderSeederServices {
//   constructor(private readonly orderModel: Model<OrderDocument>) {}
//   async create(): Promise<any> {
//     await this.orderModel.insertMany(order);
//   }
//   async drop(): Promise<any> {
//     await this.orderModel.deleteMany(order);
//   }
//   async findAll(): Promise<any> {
//     return this.orderModel.find().exec();
//   }
// }
