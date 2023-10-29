import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { NotificationCreate, NotificationUpdate } from './types/dto';
import { NotificationRepository } from './types';

const prisma = new PrismaService();

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  async findAll() {
    return await prisma.notification.findMany();
  }

  async findOne(id: string) {
    return await prisma.notification.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: NotificationCreate) {
    return await prisma.notification.create({
      data,
    });
  }

  async update(id: string, data: NotificationUpdate) {
    return await prisma.notification.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async delete(id: string) {
    await prisma.notification.delete({
      where: {
        id,
      },
    });
  }
}
