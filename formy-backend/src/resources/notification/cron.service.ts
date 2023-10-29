import { Injectable } from '@nestjs/common';

import { Notification } from './types/dto';

import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob, CronTime } from 'cron';

@Injectable()
export class CronJobService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  actions() {
    console.log('Notification sent');
  }

  create(data: Notification) {
    const jobs = this.schedulerRegistry.getCronJobs();
    let job = jobs.get(data.id);

    if (!job) {
      job = new CronJob(data.cronDate, () => {
        this.actions();
        job.stop();
      });

      this.schedulerRegistry.addCronJob(data.id, job);
      job.start();
    }

    return job;
  }

  update(id: string, data: Notification) {
    const exist = this.schedulerRegistry.doesExist('cron', id);

    if (exist) {
      const job = this.schedulerRegistry.getCronJob(id);
      job.setTime(new CronTime(data.cronDate));
      job.addCallback(() => {
        this.actions();
        job.stop();
      });
      job.start();
      return job;
    }

    return this.create(data);
  }

  delete(id: string) {
    const exist = this.schedulerRegistry.doesExist('cron', id);

    if (exist) {
      const job = this.schedulerRegistry.getCronJob(id);
      job.stop();
      this.schedulerRegistry.deleteCronJob(id);
    }

    return;
  }
}
