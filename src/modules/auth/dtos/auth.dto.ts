import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  userName: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string 
}
