interface PaymentProcess {
	processPayment(amount: number): void;
}
class PayPalPaymentProcess implements PaymentProcess {
	public processPayment(amount: number){}
}
class StripePaymentProcess implements PaymentProcess {
	public processPayment(amount: number){}
}
class ShoppingCart {
	public constructor(private paymentProcess: PaymentProcess){}
	public checkout(){
		this.paymentProcess.processPayment(100);
	}
}
