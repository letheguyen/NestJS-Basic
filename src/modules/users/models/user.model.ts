import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { IUser } from '../interfaces'
import { regexEmail, Role, UserStatus } from 'src/common/constants'

@Schema({ timestamps: true })
export class User implements IUser {
  @Prop({ lowercase: true, match: regexEmail, index: true })
  email: string

  @Prop({ default: '' })
  password?: string

  @Prop({ default: Role.commonUser, enum: Role, index: true })
  role: string

  @Prop({ default: '' })
  userName: string

  @Prop()
  avatarUrl: string

  @Prop({ default: UserStatus.active, enum: UserStatus })
  status: string

  @Prop({ default: '' })
  googleId?: string

  @Prop({ default: '', index: true })
  twitterId?: string

  @Prop({ default: '', index: true })
  facebookId?: string
}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
UserSchema.index({ updatedAt: -1 })
