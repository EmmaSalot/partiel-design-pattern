const manager = new NotificationManager();

manager.subscribe("new_order",        new EmailNotification("client@mail.fr"));
manager.subscribe("payment_refused",  new EmailNotification("support@mail.fr"));
manager.subscribe("package_shipped",  new SmsNotification("0123456789"));
manager.subscribe("big_order",      new InternalNotification);

manager.dispatch("new_order", new NewOrderEvent("client@mail.fr", 1001));

manager.dispatch("payment_refused", new PaymentRefusedEvent(1002));

manager.dispatch("package_shipped", new PackageShippedEvent("0123456789", 1001));

manager.dispatch("big_order", new BigOrderEvent(1003, 5000));