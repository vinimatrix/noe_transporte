import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'noe_taxi',
    entities: [],
    synchronize: true,
  }),
  CustomersModule, DriversModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
