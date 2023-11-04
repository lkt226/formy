/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { PrismaNotificationRepository } from './notification.repository';

import { PrismaService } from 'src/database/prisma.service';

import { CronJobService } from './cron.service';

export const notificationProviders = [
  NotificationService,
  PrismaNotificationRepository,
  CronJobService,
];

@Module({
  imports: [],
  controllers: [
    NotificationController
  ],
  providers: [
    PrismaService, 
    ...notificationProviders
  ]
})
export class NotificationModule {}
