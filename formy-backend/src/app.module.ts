import { Module } from '@nestjs/common';
import { TaskModule } from './resources/task/task.module';

import { NotificationModule } from './resources/notification/notification.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TaskModule, NotificationModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
