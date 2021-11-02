import { Controller } from '@nestjs/common';
import { ControllerBase } from 'src/commons/controller.common';
import { ServiceBase } from 'src/commons/service.common';
import { Vehicle } from '../entities/vehicle.entity';

@Controller('api/vehicle')
export class VehicleController extends ControllerBase<Vehicle> {
    getService(): ServiceBase<Vehicle> {
        throw new Error('Method not implemented.');
    }

    /**
     *
     */
    constructor(private vehicleService:VehicleService) {
        super();
        
    }
}
