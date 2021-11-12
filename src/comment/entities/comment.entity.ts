import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MongooseSchema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Ipaddress } from 'src/ipaddress/entities/ipaddress.entity';
import { User } from 'src/user/entities/user.entity';

@Schema({ timestamps: true })
export class Comment {
  @Prop({
    required: true,
  })
  text: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Ipaddress.name,
  })
  ipaddressId: Types.ObjectId;

  @Prop()
  createdBy: Types.ObjectId | User;

  @Prop()
  updatedBy: Types.ObjectId | User;

  // only read purpose, type safety
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);
CommentSchema.plugin(uniqueValidator);
