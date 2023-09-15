class UserService {
	sayHello(){
		console.log('Hello World');
	}
}
class Component {
	constructor(user){
		this.user = user;
	}
}
class Injector {
	_container = new Map();

	constructor(_providers = []){
		this._providers = _providers.forEach(service => this._container.set(service, new service()));
	}
	get(service){
		const serviceInstance = this._container.get(service);

		if(!serviceInstance) throw Error('No provider found');
		return serviceInstance;
	}
}
const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));

component.user.sayHello();
