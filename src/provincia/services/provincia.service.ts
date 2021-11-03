import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/commons/service.common';
import { Repository } from 'typeorm';
import { Provincia } from '../entities/provincia.entity';

@Injectable()
export class ProvinciaService extends ServiceBase<Provincia>{
    getRepository(): Repository<Provincia> {
       return this.provinciaRepo;
    }
    /**
     *
     */
    constructor(@InjectRepository(Provincia) private provinciaRepo:Repository<Provincia>) {
        super();
        
    }
}
