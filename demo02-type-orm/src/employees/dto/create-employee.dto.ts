import { Role } from 'src/Entities/employee.entity';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role, {
    message: 'Valid role required',
  })
  role: Role;
}
