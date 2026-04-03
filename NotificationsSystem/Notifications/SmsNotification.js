class SmsNotification {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    notify(message) {
        console.log("sms : " + this.phoneNumber + " " + message);
    }
}