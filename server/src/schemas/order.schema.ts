import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  order_id: string;

  @Prop({ required: true })
  deliveryAddress: string;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  status: string;

  @Prop({ type: Date, required: true })
  history: [
    {
      date: Date;
      customerId: { type: string; required: true };
      contact: { type: string; required: true };
      price: { type: number; required: true };
    },
  ];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
