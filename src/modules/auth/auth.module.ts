import { Module } from '@nestjs/common'

import { UserModule } from '../users/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './services/auth.service'

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
