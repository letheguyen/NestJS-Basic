import { Controller, Body, Post } from '@nestjs/common'

import { AuthDto } from './dtos/auth.dto'
import { AuthService } from './services/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async createUser(@Body() user: AuthDto) {
    return this.authService.signup(user)
  }
}
