import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  sync() {
    return this.notificationService.sync();
  }
}
