import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeesdetailsController } from './employeedetails.controller';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    database:'employee',
    port:3306,
    username:'admin1',
    password:'aA181296@',
    entities: [Employee],
    synchronize:true,
    insecureAuth:true
  }),
TypeOrmModule.forFeature([Employee])],
  controllers: [AppController, EmployeesdetailsController],
  providers: [AppService, EmployeeService],
  })
export class AppModule {}
