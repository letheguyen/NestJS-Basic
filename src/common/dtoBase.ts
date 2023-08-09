import { Expose } from 'class-transformer'

export abstract class BaseDto {
  @Expose()
  id: string

  @Expose()
  createdAt: Date

  @Expose()
  updatedAt: Date
}
