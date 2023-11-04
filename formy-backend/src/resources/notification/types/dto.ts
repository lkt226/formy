export type Notification = {
  id: string;
  title: string;
  message: string;
  date: Date | string;
  cronDate: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NotificationCreate = {
  id?: string;
  title: string;
  message: string;
  date: Date | string;
  cronDate: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type NotificationUpdate = {
  id?: string;
  title?: string;
  date?: Date | string;
  message?: string;
  cronDate?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
