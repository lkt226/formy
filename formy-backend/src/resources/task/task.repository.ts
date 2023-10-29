import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { TaskCreate, TaskUpdate } from './types/dto';
import { TaskRepository } from './types';

const prisma = new PrismaService();

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  async findAll() {
    return await prisma.task.findMany();
  }

  async findOne(id: string) {
    return await prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: TaskCreate, notificationId: string) {
    return await prisma.task.create({
      data: {
        ...data,
        notification: {
          connect: {
            id: notificationId,
          },
        },
      },
    });
  }

  async update(id: string, data: TaskUpdate) {
    return await prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    await prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
