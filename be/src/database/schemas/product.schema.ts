import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop() name!: string;

  @Prop() price!: number;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId!: Types.ObjectId;

  @Prop() description!: string;

  @Prop([String])
  images!: string[];

  @Prop({ default: 0 })
  stock!: number;

  @Prop({ default: 0 })
  sold!: number;

  @Prop({ default: 'active' })
  status!: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
