import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;

  @Prop() trackingCode!: string;

  @Prop() totalPrice!: number;

  @Prop() status!: string;

  @Prop() paymentMethod!: string;

  @Prop() paymentStatus!: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
