class PaymentProcessor {
	constructor(amount){
		this.amount = amount;
	}
	processPayment(){
		throw new Error('This method must be implemented by subclasses');
	}
}

const paypalPaymentProcessor = new PaymentProcessor(100);
paypalPaymentProcessor.processPayment = function(){
	console.log(`Processing PayPal payment of ${this.amount}`);
}
const stripePaymentProcessor = new PaymentProcessor(200);
stripePaymentProcessor.processPayment = function(){
	console.log(`Processing Stripe payment of ${this.amount}`);
}

class ShoppingCart {
	constructor(paymentProcessor){
		this.paymentProcessor = paymentProcessor;
	}
	checkout(){
		this.paymentProcessor.processPayment();
	}
}

const shoppingCart = new ShoppingCart(paypalPaymentProcessor);
shoppingCart.checkout();
