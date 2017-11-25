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

    // public getUser(attempt: string) {
    //     this.http.get('http://52.15.171.47/login/'+attempt).subscribe(data => {
    //       this.userManager.user = data[0];
    //       this.router.navigateByUrl('/directory');
    //     });
    // }

    
    //get a particular user
    public getUser(attempt: string): Observable<User[]> {
        return this.http.get<User[]>(this.endpoint + attempt)
        .catch(x => this.handleException(x));
    }

    //create functions in components

    public updateUser(firstname: string, lastname: string, emailAddress: string, pwd: string): Observable<User[]> {
        const body = {first_name: firstname, last_name:lastname, email: emailAddress, password: pwd}
        return this.http.put('http://52.15.171.47/users/'+this.userManager.user.id, body).catch(x => this.handleException(x));
    }
    
    
    public deleteUser(): Observable<void> {
        return this.http.delete<void>('http://52.15.171.47/users/'+this.userManager.user.id).catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
