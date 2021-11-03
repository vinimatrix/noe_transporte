import { Controller, Get } from '@nestjs/common';
import { ControllerBase } from 'src/commons/controller.common';
import { ServiceBase } from 'src/commons/service.common';
import { Municipio } from '../entities/municipio.entity';
import { MunicipioModule } from '../municipio.module';
import { MunicipioService } from '../services/municipio.service';

@Controller('municipio')
export class MunicipioController extends ControllerBase<Municipio>  {
    getService(): ServiceBase<Municipio> {
      return this.municipioService;
    }
    /**
     *
     */
    constructor(private municipioService:MunicipioService) {
        super();
        
    }

    @Get('byProvincia/:id')
    byProvincia(id:number):Promise<Municipio[]>{
        return this.municipioService.byProvincia(id);
    }
}
