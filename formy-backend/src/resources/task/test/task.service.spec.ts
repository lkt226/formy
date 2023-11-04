import { TaskService } from '../task.service';
import { NotificationService } from '../../notification/notification.service';

import { PrismaTaskRepository } from '~/test/resources/task/task.repository.mock';
import { PrismaNotificationRepository } from '~/test/resources/notification/notification.repository.mock';
import { CronJobService } from '~/test/resources/notification/cron.service.mock';

import { dateToCronTime } from '~/src/utils/date';

const mockTaskRepository = new PrismaTaskRepository();
const mockNotificationRepository = new PrismaNotificationRepository();

const cronJobService = new CronJobService();
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

test('find all tasks', async () => {
  const tasks = await taskService.findAll();

  expect(tasks.length).toBe(1);
});

test('find one task', async () => {
  const id = mockTaskRepository.items.length - 1;
  const task = mockTaskRepository.items[id];

  const taskFound = await taskService.findOne(task.id);

  expect(taskFound.id).toBe(task.id);
});

test('update task', async () => {
  const id = mockTaskRepository.items.length - 1;
  const task = mockTaskRepository.items[id];

  const oldDate = task.date;

  await taskService.update(task.id, {
    name: 'Test 2',
    date: new Date('2021-01-01'),
  });

  expect(task.name).toBe('Test 2');
  expect(task.date).not.toBe(oldDate);
  expect(task.date.toString()).toBe(new Date('2021-01-01').toString());
});

test('delete task', async () => {
  const id = mockTaskRepository.items.length - 1;
  const task = mockTaskRepository.items[id];

  await taskService.delete(task.id);

  expect(mockTaskRepository.items.length).toBe(0);
});
