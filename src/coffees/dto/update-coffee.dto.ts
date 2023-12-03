import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsString } from 'class-validator';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsArray()
  readonly flavors: string[];
}
