import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";

export abstract class ServiceBase<T> {

    abstract getRepository():Repository<T>
   
    async findAll():Promise<T[]>{
        return await this.getRepository().find()
    }
    async findOne(id:number):Promise<T>{
        return await this.getRepository().findOne(id);
    }

    async save(entity:T):Promise<T>{
       return await this.getRepository().save(entity);
    }

    async saveMany(entities:T[]):Promise<T[]>{
       return await this.getRepository().save(entities);
    }

    async delete(id:any){
         await this.getRepository().delete(id);
    }

    count(options?:FindManyOptions<T>):Promise<number>{
        return this.getRepository().count(options);
    }

}