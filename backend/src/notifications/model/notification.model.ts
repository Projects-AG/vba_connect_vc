import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationModel {

  private notifications: any[] = [];

  create(notification: any) {

    const newNotification = {
      ...notification,
      timestamp: new Date().toISOString(),
    };

    this.notifications.unshift(newNotification);

    return newNotification;

  }

  getAll() {

    return this.notifications;

  }

  clear() {

    this.notifications = [];

    return true;

  }

}