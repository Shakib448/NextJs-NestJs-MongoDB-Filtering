import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatDocument } from '../schemas/cat.schema';
import cat from '../../data/cat.data';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cats') private catModel: Model<CatDocument>) {}

  async createCat(): Promise<any> {
    await this.catModel.insertMany(cat);
  }

  async deleteCat(): Promise<any> {
    await this.catModel.deleteMany();
  }

  async findAll(): Promise<any> {
    return this.catModel.find();
  }
}
