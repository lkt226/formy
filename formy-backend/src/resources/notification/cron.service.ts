import { Injectable } from '@nestjs/common';

import { Notification } from './types/dto';

import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob, CronTime } from 'cron';

import { sendDiscord } from '../discord/events/webhook';

const schedulerRegistry = new SchedulerRegistry();

@Injectable()
export class CronJobService {
  actions(data: Notification) {
    sendDiscord(data, 'Tarefa');
  }

  create(data: Notification) {
    const jobs = schedulerRegistry.getCronJobs();
    let job = jobs.get(data.id);

    if (!job) {
      job = new CronJob(data.cronDate, () => {
        this.actions(data);
        job.stop();
      });

      schedulerRegistry.addCronJob(data.id, job);
      job.start();
    }

    return job;
  }

  update(id: string, data: Notification) {
    const exist = schedulerRegistry.doesExist('cron', id);

    if (exist) {
      const jobs = schedulerRegistry.getCronJobs();
      const job = jobs.get(data.id);

      job.setTime(new CronTime(data.cronDate));
      job.addCallback(() => {
        this.actions(data);
        job.stop();
      });
      job.start();

      return job;
    }

    return this.create(data);
  }

  delete(id: string) {
    const exist = schedulerRegistry.doesExist('cron', id);

    if (exist) {
      const job = schedulerRegistry.getCronJob(id);
      job.stop();
      schedulerRegistry.deleteCronJob(id);
    }

    return;
  }
}
