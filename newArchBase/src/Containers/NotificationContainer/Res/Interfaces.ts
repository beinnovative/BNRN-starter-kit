export interface INotification {
    id: number,
    title ?: string,
    description ?: string,
    dateTime: string,
    type : 'alert' | 'message' | 'notification',
}