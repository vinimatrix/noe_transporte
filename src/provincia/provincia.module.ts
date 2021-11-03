import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaController } from './controllers/provincia.controller';
import { Provincia } from './entities/provincia.entity';
import { ProvinciaService } from './services/provincia.service';

@Module({
  imports:[TypeOrmModule.forFeature([Provincia])],
  controllers: [ProvinciaController],
  providers: [ProvinciaService]
})
export class ProvinciaModule {}
