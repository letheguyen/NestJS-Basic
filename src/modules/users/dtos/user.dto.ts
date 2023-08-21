import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class UserDto {
  @IsNotEmpty()
  @IsString()
  userName: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(5)
  password: string 
}
