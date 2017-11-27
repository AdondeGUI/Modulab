import { Injectable } from "@angular/core";
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserManager } from "../../user-manager.service";

@Injectable()
export class UserRepository {
    protected endpoint = 'http://52.15.171.47/login/';
    
    constructor(
        protected http: HttpClient,
        private userManager: UserManager
    ) {}

    //get a particular user
    public getUser(attempt: string): Observable<User[]> {
        return this.http.get<User[]>(this.endpoint + attempt)
        .catch(x => this.handleException(x));
    }

    //create a new user
    public postUser(firstname: string, lastname: string, emailAddress: string, pwd: string, userRole: number): Observable<User>{
        const body = {first_name: firstname, last_name: lastname, email: emailAddress, password: pwd, role: userRole};
        return this.http.post('http://52.15.171.47/users', body).catch(x => this.handleException(x));
    }

    //update a users information
    public putUser(firstname: string, lastname: string, emailAddress: string, pwd: string): Observable<User> {
        const body = {first_name: firstname, last_name:lastname, email: emailAddress, password: pwd, role: this.userManager.user.role}
        return this.http.put('http://52.15.171.47/users/'+this.userManager.user.ID, body).catch(x => this.handleException(x));
    }
    
    //delete a user
    public deleteUser(): Observable<void> {
        return this.http.delete<void>('http://52.15.171.47/users/'+this.userManager.user.ID).catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
