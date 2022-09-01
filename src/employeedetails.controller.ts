import { Controller,Get,Put,Post,Body,Delete,Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './Employee.entity';

@Controller('employeesdetails')
export class EmployeesdetailsController {
    constructor(private employeeservice:EmployeeService){}
    @Get()
    read():Promise<Employee[]>{
        return this.employeeservice.readAll();
    }
    @Post('create')
        async create(@Body() employee:Employee):Promise<any>{
            return this.employeeservice.create(employee);
        }
    @Put(':id/update')
    async update(@Param('id') id,@Body() employee:Employee):Promise<any>{
        return this.employeeservice.update(employee);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.employeeservice.delete(id);
    }
}
