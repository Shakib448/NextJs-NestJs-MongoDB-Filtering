import { Controller, Post, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getAllCats() {
    this.catsService.findAll();
  }

  @Post()
  async create() {
    this.catsService.createCat();
  }
}
