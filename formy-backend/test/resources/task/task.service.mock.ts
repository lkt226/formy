import { Injectable } from '@nestjs/common';

import { PrismaTaskRepository } from '~/test/resources/task/task.repository.mock';

import { NotificationService } from 'src/resources/notification/notification.service';
import { TaskCreate, TaskUpdate } from 'src/resources/task/types/dto';

// import { dateToCronTime } from 'src/utils/date';

@Injectable()
export class TaskService {
  constructor(
    private repository: PrismaTaskRepository,
    private notification: NotificationService,
  ) {}

  async findAll() {
    return [
      {
        id: '2b5853ad-6f2b-4bcd-8d01-fb50bd7fc926',
        name: 'Ir ao Psicologo',
        description:
          'Ir ao psicologo no centro de niteroi (terapias integradas).',
        completed: false,
        date: '2023-10-27T08:00:00.567Z',
        notificationId: 'ccee833e-1812-4056-a115-13b0bced5232',
        createdAt: '2023-10-28T21:02:48.645Z',
        updatedAt: '2023-10-28T21:20:07.431Z',
      },
    ];
  }

  async findOne(id: string) {
    return {
      id,
      name: 'Ir ao Psicologo',
      description:
        'Ir ao psicologo no centro de niteroi (terapias integradas).',
      completed: false,
      date: '2023-10-27T08:00:00.567Z',
      notificationId: 'ccee833e-1812-4056-a115-13b0bced5232',
      createdAt: '2023-10-28T21:02:48.645Z',
      updatedAt: '2023-10-28T21:20:07.431Z',
    };
  }

  async create(data: TaskCreate) {
    return {
      id: '2b5853ad-6f2b-4bcd-8d01-fb50bd7fc926',
      name: data.name,
      description:
        'Ir ao psicologo no centro de niteroi (terapias integradas).',
      completed: false,
      date: data.date + '',
      notificationId: 'ccee833e-1812-4056-a115-13b0bced5232',
      createdAt: '2023-10-28T21:02:48.645Z',
      updatedAt: '2023-10-28T21:20:07.431Z',
    };
  }

  async update(id: string, data: TaskUpdate) {
    return {
      id: id,
      name: data.name,
      description:
        'Ir ao psicologo no centro de niteroi (terapias integradas).',
      completed: false,
      date: '2023-10-27T08:00:00.567Z',
      notificationId: 'ccee833e-1812-4056-a115-13b0bced5232',
      createdAt: '2023-10-28T21:02:48.645Z',
      updatedAt: '2023-10-28T21:20:07.431Z',
    };
  }

  async delete(id: string) {
    console.log(id);
    return;
  }
}
