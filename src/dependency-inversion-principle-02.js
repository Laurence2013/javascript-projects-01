class PaymentProcessor {
	processPayment(amount){
		throw new Error('This method must be implemented by subclasses');
	}
}
class PayPalPaymentProcess extends PaymentProcessor {
	processPayment(amount){
		return 'Processing payment of $%s with PayPal' % amount;
	}
}
class StripePaymentProcess extends PaymentProcessor {
	processPayment(amount){
		return 'Processing payment of $%s with Stripe' % amount;
	}
}
class ShoppingCart {
	constructor(paymentProcessor){
		this.paymentProcessor = paymentProcessor;
	}
	checkout(amount){
		console.log(amount);
		return this.paymentProcessor.processPayment(amount);
	}
}

const paymentProcessor = new PayPalPaymentProcess();
const shoppingCart = new ShoppingCart(paymentProcessor);

shoppingCart.checkout(100);
