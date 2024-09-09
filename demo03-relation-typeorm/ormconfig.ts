import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'wecommit',
  password: '203204',
  database: 'demo03',
  entities: [__dirname + '/**/*.entity{.ts, .js}'],
  synchronize: true,
};
