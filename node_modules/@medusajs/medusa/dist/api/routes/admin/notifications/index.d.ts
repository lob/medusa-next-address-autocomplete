import { Notification } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminNotificationsRelations: string[];
export declare const allowedAdminNotificationsRelations: string[];
export declare const defaultAdminNotificationsFields: string[];
export declare const allowedAdminNotificationsFields: string[];
export declare type AdminNotificationsListRes = {
    notifications: Notification[];
};
export declare type AdminNotificationsRes = {
    notification: Notification;
};
export * from "./list-notifications";
export * from "./resend-notification";
