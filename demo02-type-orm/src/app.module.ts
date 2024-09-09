import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
