import { Controller, Post, Get, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getAllCats() {
    this.catsService.findAll();
  }

  @Post('insert')
  async create() {
    this.catsService.createCat();
  }

  @Delete('delete')
  async deleteCats() {
    this.catsService.deleteCat();
  }
}
