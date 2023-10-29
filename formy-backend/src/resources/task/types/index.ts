import { Task, TaskCreate, TaskUpdate } from './dto';

export interface TaskRepository {
  findAll(): Promise<Task[]>;
  findOne(id: string): Promise<Task>;
  create(data: TaskCreate, notificationId: string): Promise<Task>;
  update(id: string, data: TaskUpdate): Promise<Task>;
  delete(id: string): Promise<void>;
}
