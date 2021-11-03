import { Controller } from '@nestjs/common';
import { ControllerBase } from 'src/commons/controller.common';
import { ServiceBase } from 'src/commons/service.common';
import { Provincia } from '../entities/provincia.entity';
import { ProvinciaService } from '../services/provincia.service';

@Controller('provincia')
export class ProvinciaController extends ControllerBase<Provincia>{
    getService(): ServiceBase<Provincia> {
        return this.provinciaService;
    }
    /**
     *
     */
    constructor(private readonly provinciaService:ProvinciaService) {
        super();
        
    }
}
