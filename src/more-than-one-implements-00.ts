interface UserAuthentication {
	login(email: any, password: any): any;   
	logout(): any; 
} 
interface UserSettings { 
	getUserDetails(): any;   
	updateSettings(settings: any): any; 
}
class UserClient implements UserAuthentication, UserSettings {
	public login(email: any, password: any){};
	public logout(){};
	public getUserDetails(){};
	public updateSettings(){};
}
const user = new UserClient();
user.login('foo@bar.com', 'pass123');
user.getUserDetails();
