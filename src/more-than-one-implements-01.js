const UserAuthentication = {
	login(email, password){},
	logout(){}
}	
const UserSettings = {
	getUserDetails(){},
	updateSettings(settings){}
}

class UserClient {
	constructor(){
		this.userAuth = UserAuthentication;
		this.userSettings = UserSettings;
	}
	login(email, password){
		this.userAuth.login(email, password);
	}
	logout(){
		this.userAuth.logout();
	}
	getUserDetails(){
		this.userSettings.getUserDetails();
	}
	updateSettings(settings){
		this.userSettings.updateSettings(settings);
	}
}

const user = new UserClient();
user.login('foo@bar.com', 'pass123');
user.getUserDetails();
