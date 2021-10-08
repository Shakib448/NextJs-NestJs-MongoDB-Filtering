import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';
import cat from '../../data/cat.data';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async createCat(): Promise<any> {
    await this.catModel.insertMany(cat);
  }

  async findAll(): Promise<any> {
    return this.catModel.find();
  }
}
