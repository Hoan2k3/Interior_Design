import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProvinceDocument = Province & Document;

@Schema({ timestamps: true })
export class Province {
  @Prop() name!: string;

  @Prop() code!: string;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
