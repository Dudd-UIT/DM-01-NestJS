import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;
}
