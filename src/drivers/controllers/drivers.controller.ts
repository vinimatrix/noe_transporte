import { Controller } from '@nestjs/common';
import { ControllerBase } from 'src/commons/controller.common';
import { ServiceBase } from 'src/commons/service.common';
import { Driver } from '../entities/driver.entity';
import { DriversService } from '../services/drivers.service';

@Controller('api/drivers')
export class DriversController extends ControllerBase<Driver>{
    getService(): ServiceBase<Driver> {
        return this.driverService;
    }
    /**
     *
     */
    constructor(private readonly driverService:DriversService) {
        super();
        
    }
}
