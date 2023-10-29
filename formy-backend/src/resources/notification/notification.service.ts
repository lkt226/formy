import { Injectable } from '@nestjs/common';

import { NotificationCreate, NotificationUpdate } from './types/dto';
import { PrismaNotificationRepository } from './notification.repository';
import { CronJobService } from './cron.service';

@Injectable()
export class NotificationService {
  constructor(
    private repository: PrismaNotificationRepository,
    private cronJob: CronJobService,
  ) {}

  async sync() {
    const notifications = await this.repository.findAll();

    notifications.forEach((notification) => {
      this.cronJob.create(notification);
    });

    return notifications;
  }

  async create(data: NotificationCreate) {
    const notification = await this.repository.create(data);

    this.cronJob.create(notification);

    return notification;
  }

  async update(id: string, data: NotificationUpdate) {
    const existNotification = await this.repository.findOne(id);

    if (!existNotification) {
      throw new Error('Notification not found');
    }

    const notification = await this.repository.update(id, data);

    this.cronJob.update(id, notification);

    return notification;
  }

  async delete(id: string) {
    const existNotification = await this.repository.findOne(id);

    if (!existNotification) {
      throw new Error('Notification not found');
    }

    this.cronJob.delete(id);

    return await this.repository.delete(id);
  }
}
