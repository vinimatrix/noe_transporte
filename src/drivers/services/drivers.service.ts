import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/commons/service.common';
import { Repository } from 'typeorm';
import { Driver } from '../entities/driver.entity';

@Injectable()
export class DriversService extends ServiceBase<Driver> {
    getRepository(): Repository<Driver> {
        return this.driverRepo;
    }
    /**
     *
     */
    constructor(@InjectRepository(Driver)private driverRepo:Repository<Driver>) {
        super();
        
    }

}
