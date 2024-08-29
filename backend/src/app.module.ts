import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';
import { WorkingDayModule } from './working-day/working-day.module';
import { AttendanceModule } from './attendance/attendance.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [
    PrismaModule,
    EmployeeModule,
    SalaryModule,
    WorkingDayModule,
    AttendanceModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'auth/login', method: RequestMethod.POST });
  }
}
