export type Notification = {
  id: string;
  message: string;
  cronDate: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NotificationCreate = {
  id?: string;
  message: string;
  cronDate: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type NotificationUpdate = {
  id?: string;
  message?: string;
  cronDate?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
