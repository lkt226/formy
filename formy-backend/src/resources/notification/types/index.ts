import { Notification, NotificationCreate, NotificationUpdate } from './dto';

export interface NotificationRepository {
  findAll(): Promise<Notification[]>;
  findOne(id: string): Promise<Notification>;
  create(data: NotificationCreate): Promise<Notification>;
  update(id: string, data: NotificationUpdate): Promise<Notification>;
  delete(id: string): Promise<void>;
}
