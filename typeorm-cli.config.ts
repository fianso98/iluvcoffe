import { Coffee } from 'src/coffees/entities/coffee';
import { Flavor } from 'src/coffees/entities/flavor';
import { CoffeeRefactor1700563538401 } from 'src/migrations/1700563538401-CoffeeRefactor';
import { SchemaSync1700564284446 } from 'src/migrations/1700564284446-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [SchemaSync1700564284446],
});
