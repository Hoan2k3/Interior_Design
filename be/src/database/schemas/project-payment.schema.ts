import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type ProjectPaymentDocument = ProjectPayment & Document;

@Schema({ timestamps: true })
export class ProjectPayment {
  @Prop({ type: Types.ObjectId, ref: 'Project' })
  projectId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;

  @Prop() amount!: number;

  @Prop() paymentType!: string;

  @Prop() paymentMethod!: string;

  @Prop() paymentStatus!: string;
}

export const ProjectPaymentSchema =
  SchemaFactory.createForClass(ProjectPayment);
