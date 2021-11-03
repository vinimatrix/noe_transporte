import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/commons/service.common';
import { Repository } from 'typeorm';
import { Municipio } from '../entities/municipio.entity';
import { MunicipioModule } from '../municipio.module';

@Injectable()
export class MunicipioService extends ServiceBase<Municipio>{
    getRepository(): Repository<Municipio> {
        return this.municipioRepo;
    }
    /**
     *
     */
    constructor(@InjectRepository(Municipio)private municipioRepo:Repository<Municipio>) {
        super();
        
    }
    byProvincia(id:number):Promise<Municipio[]>{
        return this.municipioRepo.createQueryBuilder('municipio').where("municipio.provinciaId = :id", { id: id }).getMany();
    }
}
