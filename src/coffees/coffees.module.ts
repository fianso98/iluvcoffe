import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee';
import { Flavor } from './entities/flavor';
import { COFFEE_BRANDS } from './coffees.constant';

class CoffeesServiceMock {}
@Injectable()
export class CoffeeBrandsFactory {
  create() {
    /* do something */
    return ['buddy brew', 'nescafe'];
  }
}
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  exports: [CoffeesService],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS,
      useFactory: (coffeeBrandsFactory: CoffeeBrandsFactory) =>
        coffeeBrandsFactory.create(),
      inject: [CoffeeBrandsFactory],
    },
    // {
    //   provide: COFFEE_BRANDS,
    //   useValue: ['buddy brew', 'nescafe'],
    // },
    // {
    //   provide: CoffeesService,
    //   useClass:  process.env.NODE_ENV === 'development' ? CoffeesServiceMock : CoffeesService,
    // },
  ],
})
export class CoffeesModule {}
