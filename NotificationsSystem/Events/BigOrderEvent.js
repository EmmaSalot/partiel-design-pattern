class BigOrderEvent {
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }

    getMessage() {
        return "Big order : " + this.orderId + " amount : " + this.amount;
    }
}