import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  //USE FOR SESSION
  // imports: [PassportModule.register({ session: true }), UsersModule],
  // providers: [AuthService, LocalStrategy, SessionSerializer],

  imports: [
    ConfigModule.forRoot(), // Nạp biến môi trường từ file .env
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
