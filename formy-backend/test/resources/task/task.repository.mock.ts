import { TaskRepository } from 'src/resources/task/types';
import { Task, TaskCreate, TaskUpdate } from 'src/resources/task/types/dto';

export class PrismaTaskRepository implements TaskRepository {
  items: Task[] = [];

  async findAll() {
    return this.items;
  }

  async findOne(id: string) {
    return this.items.find((item) => item.id === id);
  }
  async create(data: TaskCreate, notificationId: string) {
    const task: Task = {
      id: this.items.length.toString(),
      notificationId,
      name: data.name,
      date: new Date(data.date),
      description: data.description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(task);

    return task;
  }

  async update(id: string, data: TaskUpdate) {
    const task = await this.findOne(id);

    if (!task) {
      return null;
    }

    task.name = data.name || task.name;
    task.date = new Date(data.date) || task.date;
    task.description = data.description || task.description;
    task.completed = data.completed || task.completed;

    return task;
  }

  async delete(id: string) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Task not found');
    }

    this.items.splice(index, 1);
  }
}
