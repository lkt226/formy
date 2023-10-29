import { SchedulerRegistry } from '@nestjs/schedule';

import { TaskService } from '../task.service';
import { NotificationService } from '../../notification/notification.service';
import { CronJobService } from '../../notification/cron.service';

import { PrismaTaskRepository } from '~/test/resources/task/task.repository.mock';
import { PrismaNotificationRepository } from '~/test/resources/notification/notification.repository.mock';

import { dateToCronTime } from '~/src/utils/date';

const mockTaskRepository = new PrismaTaskRepository();
const mockNotificationRepository = new PrismaNotificationRepository();

const schedulerRegistry = new SchedulerRegistry();

const cronJobService = new CronJobService(schedulerRegistry);
// eslint-disable-next-line prettier/prettier
const notificationService = new NotificationService(mockNotificationRepository, cronJobService);
const taskService = new TaskService(mockTaskRepository, notificationService);

test('create task', async () => {
  await taskService.create({
    name: 'Test',
    date: new Date(),
  });

  const id = mockTaskRepository.items.length - 1;
  const task = mockTaskRepository.items[id];
  const notification = mockNotificationRepository.items[id];

  expect(task.name).toBe('Test');
  expect(task.date).toBeInstanceOf(Date);

  expect(notification.message).toBe(
    `A sua tarefa: ${task.name} esta agendada para ${task.date}`,
  );
  expect(notification.cronDate).toBe(dateToCronTime(task.date));
});

test('update task', async () => {
  const oldDate = new Date();

  await taskService.create({
    name: 'Test',
    date: oldDate,
  });

  const id = mockTaskRepository.items.length - 1;
  const task = mockTaskRepository.items[id];
  const notification = mockNotificationRepository.items[id];

  await taskService.update(task.id, {
    name: 'Test 2',
    date: new Date(),
  });

  expect(task.name).toBe('Test 2');
  expect(task.date).not.toBe(oldDate);
  expect(task.date).toBeInstanceOf(Date);

  expect(notification.message).toBe(
    `A sua tarefa: ${task.name} esta agendada para ${task.date}`,
  );
});
