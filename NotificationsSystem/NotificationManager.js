class NotificationManager {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventType, notification) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(notification);
    }

    dispatch(eventType, event) {
        const subscribers = this.listeners[eventType];
        if (!subscribers || subscribers.length === 0) {
            console.log("NotificationManager : " + eventType);
            return;
        }
        subscribers.forEach(notification => notification.notify(event.getMessage()));
    }
}