export interface INotification {
    profilePicture: string;
    name: string;
    notificationText: string;
    time: string;
    read: boolean;
    actionText?: string;
    actionImage?: string;
    message?: string;
}
