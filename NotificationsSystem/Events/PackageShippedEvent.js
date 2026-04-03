class PackageShippedEvent {
    constructor(clientPhone, orderId) {
        this.clientPhone = clientPhone;
        this.orderId = orderId;
    }

    getMessage() {
        return "Package shipped : " + this.orderId;
    }
}