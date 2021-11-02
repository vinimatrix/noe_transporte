import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/commons/service.common';
import { Repository } from 'typeorm';
import { Driver } from '../entities/driver.entity';
import { Vehicle } from '../entities/vehicle.entity';

@Injectable()
export class DriversService extends ServiceBase<Vehicle> {
    getRepository(): Repository<Vehicle> {
        return this.driverRepo;
    }
    /**
     *
     */
    constructor(@InjectRepository(Vehicle)private driverRepo:Repository<Vehicle>) {
        super();
        
    }

}
