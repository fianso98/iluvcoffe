import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString()
  readonly flavors: string[];
}
