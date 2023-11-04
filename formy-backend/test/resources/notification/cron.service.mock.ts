import { Injectable } from '@nestjs/common';

import { Notification } from 'src/resources/notification/types/dto';

import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob, CronTime } from 'cron';

const schedulerRegistry = new SchedulerRegistry();

@Injectable()
export class CronJobService {
  actions() {
    console.log('Notification sent');
  }

  create(data: Notification) {
    const jobs = schedulerRegistry.getCronJobs();
    let job = jobs.get(data.id);

    if (!job) {
      job = new CronJob(data.cronDate, () => {
        this.actions();
        job.stop();
      });

      schedulerRegistry.addCronJob(data.id, job);
    }

    return job;
  }

  update(id: string, data: Notification) {
    const exist = schedulerRegistry.doesExist('cron', id);

    if (exist) {
      const job = schedulerRegistry.getCronJob(id);
      job.setTime(new CronTime(data.cronDate));
      job.addCallback(() => {
        this.actions();
        job.stop();
      });
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
