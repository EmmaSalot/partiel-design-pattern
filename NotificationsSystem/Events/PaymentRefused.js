class PaymentRefusedEvent {
    constructor(orderId) {
        this.orderId = orderId;
    }

    getMessage() {
        return "Payment refused : " + this.orderId;
    }
}