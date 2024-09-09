import {
  Column,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';
import { ContactInfo } from './contact_info.entity';

export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (manager) => manager.directReport, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directReport: Employee[];

  @OneToOne(() => ContactInfo, (contacInfo) => contacInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.employees, { cascade: true })
  @JoinTable()
  meetings: Meeting[];
}
