import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop() title!: string;

  @Prop() description!: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  designerId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  contractorId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Design' })
  designId!: Types.ObjectId;

  @Prop({ default: 'pending' })
  status!: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
