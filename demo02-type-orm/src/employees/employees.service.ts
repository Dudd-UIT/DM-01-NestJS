import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, Role } from 'src/Entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roleEnum = Role[role as keyof typeof Role];
      return this.employeeRepository.findBy({ role: roleEnum });
    }
    return this.employeeRepository.find();
  }

  async findOne(id: number) {
    return this.employeeRepository.findOneBy({ id });
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    console.log('Role:', createEmployeeDto.role); // In log role trước khi lưu
    const newEmployee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(newEmployee);
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    if (employee) {
      Object.assign(employee, updateEmployeeDto);
      return this.employeeRepository.save(employee);
    }
    return null; // Hoặc throw error nếu người dùng không tồn tại
  }

  async remove(id: number) {
    const employee = await this.findOne(id);
    if (employee) {
      return this.employeeRepository.remove(employee);
    }
    return null; // Hoặc throw error nếu người dùng không tồn tại
  }
}
