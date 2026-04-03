class NewOrderEvent {
    constructor(clientEmail, orderId) {
        this.clientEmail = clientEmail;
        this.orderId = orderId;
    }

    getMessage() {
        return "New order : " + this.orderId;
    }
}