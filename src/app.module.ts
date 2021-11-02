import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { DriversModule } from './drivers/drivers.module';

@Module(
  
  {

  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }),
    TypeOrmModule.forRoot({
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
