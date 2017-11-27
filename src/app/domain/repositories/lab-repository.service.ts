import { Injectable } from "@angular/core";
import { Lab } from './../models/lab';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserManager } from "../../user-manager.service"

@Injectable()
export class LabRepository {
    protected endpoint = 'http://52.15.171.47/users/' + this.userManager.user.ID + '/labs';
    
    constructor(
        protected http: HttpClient,
        private userManager: UserManager
    ) {}

    //get all labs for a particular user
    public getAllLabs(): Observable<Lab[]> {
        return this.http.get<Lab[]>(this.endpoint).catch(x => this.handleException(x));
    }

    //post a new lab
    public postLab(bodytitle: string, bodycourse_id: number): Observable<Lab>  {
        const body = {title: bodytitle, course_id: bodycourse_id, role: this.userManager.user.role};
        return this.http.post(this.endpoint, body).catch(x => this.handleException(x));
    }

    //get an individual lab
    public getIndLab(labid: number): Observable<Lab>{
        return this.http.get<Lab>(this.endpoint + "/" + String(labid)).catch(x => this.handleException(x));
    }

      //update a individual lab
    public putLab(labid: number, bodytitle: string): Observable<Lab[]> {
        const body = {title: bodytitle};
        return this.http.put(this.endpoint + labid, body).catch(x => this.handleException(x));
    }

      //delete an individual lab
    public deleteIndLab(labid: number): Observable<void>{
        return this.http.delete<void>(this.endpoint + "/" + String(labid)).catch(x => this.handleException(x));
    }

    //delte all labs for a user
    public deleteAllLabs(): Observable<void>{
        return this.http.delete<void>(this.endpoint).catch(x => this.handleException(x));
    }

    //get a lab_id
    public getLabid(labtitle: string, courseid: number, role: number): Observable<number>{
        return this.http.get<number>("http://52.15.171.47/labs/" + this.userManager.user.ID + "/" + labtitle + "/" + courseid + "/" + role).catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }

}
