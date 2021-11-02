import { Controller, Get } from '@nestjs/common';
import { ControllerBase } from 'src/commons/controller.common';
import { ServiceBase } from 'src/commons/service.common';
import { Vehicle } from '../entities/vehicle.entity';
import { VehiclesService } from '../services/vehice.service';

@Controller('api/vehicle')
export class VehicleController extends ControllerBase<Vehicle> {
    getService(): ServiceBase<Vehicle> {
        return this.vehicleService;
    }

    /**
     *
     */
    constructor(private readonly vehicleService:VehiclesService) {
        super();
        
    }
    @Get('bymake')
    byMake(make:string){
        this.vehicleService.byMake(make);
    }
}
