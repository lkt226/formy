/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaTaskRepository } from './task.repository';

import { PrismaService } from 'src/database/prisma.service';

import { notificationProviders } from '../notification/notification.module';

export const taskProviders = [
  TaskService,
  PrismaTaskRepository
];

@Module({
  imports: [],
  controllers: [
    TaskController
  ],
  providers: [
    PrismaService, 
    ...taskProviders, 
    ...notificationProviders
  ],
})
export class TaskModule {}
