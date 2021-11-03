import { Controller } from '@nestjs/common';
import { ControllerBase } from 'src/commons/controller.common';
import { ServiceBase } from 'src/commons/service.common';
import { Customer } from '../entities/customer.entiry';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController extends ControllerBase<Customer> {
    getService(): ServiceBase<Customer> {
       return this.customerService;
    }
    /**
     *
     */
    constructor(private readonly customerService:CustomersService) {
        super();
        
    }
}
