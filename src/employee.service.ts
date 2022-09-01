import { Injectable } from '@nestjs/common';
import { Repository,UpdateResult,DeleteResult } from 'typeorm';
import { Employee } from './Employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private employeeRepository:Repository<Employee>
    ){}
    async create(employees:Employee):Promise<Employee>{
        return await this.employeeRepository.save(employees);
    }
    async update(employees:Employee):Promise<UpdateResult>{
        return await this.employeeRepository.update(employees.id,employees);
    }
    async delete(id):Promise<DeleteResult>{
        return await this.employeeRepository.delete(id);
    }
    async readAll():Promise<Employee[]>{
    return await this.employeeRepository.find();
    }}
