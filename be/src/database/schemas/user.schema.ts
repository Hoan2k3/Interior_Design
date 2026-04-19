import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop() name!: string;

  @Prop({ unique: true }) email!: string;

  @Prop() password!: string;

  @Prop({ type: Types.ObjectId, ref: 'Role' })
  roleId!: Types.ObjectId;

  @Prop() phone!: string;

  @Prop({ type: Types.ObjectId, ref: 'Province' })
  provinceId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Ward' })
  wardId!: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
