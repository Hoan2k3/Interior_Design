import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type DesignDocument = Design & Document;

@Schema({ timestamps: true })
export class Design {
  @Prop() name!: string;

  @Prop() description!: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  designerId!: Types.ObjectId;

  @Prop([String])
  images!: string[];
}

export const DesignSchema = SchemaFactory.createForClass(Design);
