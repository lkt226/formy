import { NotificationRepository } from 'src/resources/notification/types';
import {
  Notification,
  NotificationCreate,
  NotificationUpdate,
} from 'src/resources/notification/types/dto';

export class PrismaNotificationRepository implements NotificationRepository {
  items: Notification[] = [];

  async findAll() {
    return this.items;
  }

  async findOne(id: string) {
    return this.items.find((item) => item.id === id);
  }

  async create(data: NotificationCreate) {
    const notification: Notification = {
      id: this.items.length.toString(),
      title: data.title,
      date: data.date,
      cronDate: data.cronDate,
      message: data.message,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(notification);

    return notification;
  }

  async update(id: string, data: NotificationUpdate) {
    const notification = await this.findOne(id);

    if (!notification) {
      throw new Error('Notification not found');
    }

    notification.cronDate = data.cronDate || notification.cronDate;
    notification.message = data.message || notification.message;

    return notification;
  }

  async delete(id: string) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Notification not found');
    }

    this.items.splice(index, 1);
  }
}
