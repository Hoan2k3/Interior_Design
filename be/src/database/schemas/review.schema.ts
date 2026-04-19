import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Product' })
  productId!: Types.ObjectId;

  @Prop() rating!: number;

  @Prop() comment!: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
