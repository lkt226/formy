export type TaskGet = {
  id: string,
  name: string,
  description: string,
  completed: boolean,
  date: string,
  notificationId: string,
  createdAt: Date,
  updatedAt: Date,
}

export type TaskCreate = {
  name: string;
  description?: string;
  date: Date;
};

export type TaskUpdate = {
  name?: string;
  description?: string;
  date?: Date;
};