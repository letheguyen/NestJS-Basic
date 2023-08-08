import { Injectable } from '@nestjs/common'

import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  createUser(user: UserDto) {
    return { User: user }
  }

  getAllUsers() {
    return [
      {
        id: '11kfw5t',
        name: 'Khoi Hoang',
        age: 31,
      },
      {
        id: '11kfew5t',
        name: 'Khoi Hoang 2',
        age: 37,
      },
      {
        id: '11kfw435t',
        name: 'Khoi Hoang 3',
        age: 35,
      },
    ]
  }

  getUserById(id: string, name: string) {
    return { id, name }
  }
}
