import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return id;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return 'id : ' + id + ' body : ' + updateCoffeeDto;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'removed :' + id;
  }
}
