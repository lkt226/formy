export type Task = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  date: Date;
  notificationId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TaskCreate = {
  id?: string;
  name: string;
  description?: string | null;
  completed?: boolean;
  date: Date;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type TaskUpdate = {
  id?: string;
  name?: string;
  description?: string | null;
  completed?: boolean;
  date?: Date;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
