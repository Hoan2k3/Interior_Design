import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop() name!: string;

  @Prop() image!: string;

  @Prop() description!: string;

  @Prop({ default: 'active' })
  status!: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
