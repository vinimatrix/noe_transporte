import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './controllers/customers.controller';
import { Customer } from './entities/customer.entiry';
import { CustomersService } from './services/customers.service';

@Module({
  imports:[TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [CustomersService],
 
})
export class CustomersModule {}
