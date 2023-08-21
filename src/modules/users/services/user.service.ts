import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { UserDto } from '../dtos/user.dto'
import { StoreService } from 'src/store/store.service'
import { User, UserDocument } from '../models/user.model'

@Injectable()
export class UserService extends StoreService<UserDocument> {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {
    super(userModel)
  }

  async createUser(user: UserDto) {
    return await this.userModel.create([user])
  }

  getAllUsers() {
    return 'OK'
  }

  getUserById(id: string, name: string) {
    return 'OK'
  }
}
