import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/commons/service.common';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entiry';

@Injectable()
export class CustomersService extends ServiceBase<Customer>{
    getRepository(): Repository<Customer> {
      return this.customerRepo;
    }
    /**
     *
     */
    constructor(@InjectRepository(Customer)private customerRepo:Repository<Customer>) {
        super();
        
    }
}
