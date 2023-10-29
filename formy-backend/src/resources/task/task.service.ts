import { Injectable } from '@nestjs/common';

import { NotificationService } from '../notification/notification.service';
import { PrismaTaskRepository } from './task.repository';

import { TaskCreate, TaskUpdate } from './types/dto';

import { dateToCronTime } from 'src/utils/date';

@Injectable()
export class TaskService {
  constructor(
    private repository: PrismaTaskRepository,
    private notification: NotificationService,
  ) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    return this.repository.findOne(id);
  }

  async create(data: TaskCreate) {
    const { name, date } = data;

    const notification = await this.notification.create({
      message: `A sua tarefa: ${name} esta agendada para ${date}`,
      cronDate: dateToCronTime(date),
    });

    const task = await this.repository.create(data, notification.id);

    return task;
  }

  async update(id: string, data: TaskUpdate) {
    const { name, date } = data;
    const task = await this.repository.findOne(id);

    if (!task) {
      throw new Error('Task not found');
    }

    if ((date && date != task.date) || (name && name != task.name)) {
      this.notification.update(task.notificationId, {
        message: `A sua tarefa: ${name} esta agendada para ${date}`,
        cronDate: dateToCronTime(date),
      });
    }

    return this.repository.update(id, data);
  }

  async delete(id: string) {
    const task = await this.repository.findOne(id);

    if (!task) {
      throw new Error('Task not found');
    }

    await this.notification.delete(task.notificationId);

    return this.repository.delete(id);
  }
}
