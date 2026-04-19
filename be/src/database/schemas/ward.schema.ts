import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type WardDocument = Ward & Document;

@Schema({ timestamps: true })
export class Ward {
  @Prop() name!: string;

  @Prop() code!: string;

  @Prop({ type: Types.ObjectId, ref: 'Province' })
  provinceId!: Types.ObjectId;
}

export const WardSchema = SchemaFactory.createForClass(Ward);
