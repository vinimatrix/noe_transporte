import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversController } from './controllers/drivers.controller';
import { VehicleController } from './controllers/vehicle.controller';
import { Driver } from './entities/driver.entity';
import { Vehicle } from './entities/vehicle.entity';
import { DriversService } from './services/drivers.service';
import { VehiclesService } from './services/vehice.service';

@Module({
  imports:[TypeOrmModule.forFeature([Driver,Vehicle])],
  controllers: [DriversController,VehicleController],
  providers: [DriversService,VehiclesService]
})
export class DriversModule {}
