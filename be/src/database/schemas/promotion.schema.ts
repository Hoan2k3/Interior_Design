import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema({ timestamps: true })
export class Promotion {
  @Prop() name!: string;

  @Prop() description!: string;

  @Prop() discountPercent!: number;

  @Prop([{ type: Types.ObjectId, ref: 'Product' }])
  productIds!: Types.ObjectId[];

  @Prop() startDate!: Date;

  @Prop() endDate!: Date;

  @Prop({ default: true })
  isActive!: boolean;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
