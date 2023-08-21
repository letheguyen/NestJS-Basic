import { Document, Model } from 'mongoose'

export class StoreService<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  saveData() {
    console.log('SAVE') 
  }
}
