import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioController } from './controllers/municipio.controller';
import { Municipio } from './entities/municipio.entity';
import { MunicipioService } from './services/municipio.service';

@Module({
  imports:[TypeOrmModule.forFeature([Municipio])],
  controllers: [MunicipioController],
  providers: [MunicipioService]
})
export class MunicipioModule {}
