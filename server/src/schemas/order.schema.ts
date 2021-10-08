import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ versionKey: false, timestamps: true })
export class Order {
  @Prop({ required: true })
  order_id: string;

  @Prop({ required: true })
  deliveryAddress: string;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  status: string;

  @Prop({
    type: [
      {
        date: { type: Date, default: Date.now() },
        customerId: { type: String, required: true },
        contact: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  })
  history: [];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
