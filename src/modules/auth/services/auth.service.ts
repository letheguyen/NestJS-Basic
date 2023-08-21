import { Injectable } from '@nestjs/common'

import { UserService } from 'src/modules/users/services/user.service'
import { AuthDto } from '../dtos/auth.dto'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(data: AuthDto) {
    return 'OK'
  }
}
