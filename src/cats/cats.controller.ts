import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get('all')
  findAll(): string {
    return 'All Cats!';
  }

  @Get(':id')
  findCat(@Param() params: any): string {
    return `Cat #${params.id}!`;
  }

  @Post('add')
  async createCat(@Body() params: CreateCatDto) {
    return `Cat ${params.name} created!`;
  }
}
