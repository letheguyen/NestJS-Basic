import { Controller, Get, Body, Post, Param, Query } from '@nestjs/common'

import { UserDto } from './user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Post()
  async createUser(@Body() user: UserDto) {
    return this.userService.createUser(user)
  }

  @Get(':id')
  getUserById(@Param('id') id: string, @Query('name') name: string) {
    return this.userService.getUserById(id, name)
  }
}
