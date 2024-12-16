"use strict";
class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Orders {
    constructor(date, status, customer, payment, orderDetails) {
        this.payment = new Cash(0, 0);
        this.orderDetails = [];
        this.date = date;
        this.status = status;
        this.customer = customer;
        this.payment = payment;
        this.orderDetails = orderDetails;
    }
    addOrderDetail(orderDetails) {
        this.orderDetails.push(orderDetails);
    }
    calcSubTotal() {
        return 0;
    }
    calcTax() {
        return 0;
    }
    calcTotal() {
        return 0;
    }
    calcTotalWeight() {
        return 0;
    }
    pay(payment) {
        this.payment = payment;
    }
}
class OrdersDetail {
    constructor(quantity, taxStatus, Item) {
        this.quantity = quantity;
        this.taxStatus = taxStatus;
        this.Item = Item;
    }
    calcSubTotal() {
        return 0;
    }
    calcWeight() {
        return 0;
    }
    calcTax() {
        return 0;
    }
}
class Item {
    constructor(shippingweight, description) {
        this.shippingweight = shippingweight;
        this.description = description;
    }
    getPriceForQuantity() {
        return 0;
    }
    getTax() {
        return 0;
    }
    inStock() {
        return 0;
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class Cash extends Payment {
    constructor(amount, cashTendered) {
        super(amount);
        this.cashTendered = cashTendered;
    }
}
class Check extends Payment {
    constructor(name, bankID, amount) {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }
    authorized() {
        return true;
    }
}
class Credit extends Payment {
    constructor(number, type, amount, expDate) {
        super(amount);
        this.number = number;
        this.type = type;
        this.expDate = expDate;
    }
    authorized() {
        return true;
    }
}
