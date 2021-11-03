import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entiry';
import { DriversModule } from './drivers/drivers.module';
import { Driver } from './drivers/entities/driver.entity';
import { Vehicle } from './drivers/entities/vehicle.entity';
import { Municipio } from './municipio/entities/municipio.entity';
import { MunicipioModule } from './municipio/municipio.module';
import { Provincia } from './provincia/entities/provincia.entity';
import { ProvinciaModule } from './provincia/provincia.module';

@Module(
  
  {

  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'vinix12345',
    database: 'noe_transporte',
    entities: [Customer,Driver,Vehicle,Provincia,Municipio],
    synchronize: true,
  }),
  CustomersModule, DriversModule, MunicipioModule,ProvinciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
