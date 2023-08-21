import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/users/user.module'

const modules = [UserModule, AuthModule]

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    ...modules,
  ],
  controllers: [AppController],
})
export class AppModule {}
