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
    public postLab(bodytitle: string, bodycourse_id: number) {
        const body = {title: bodytitle, course_id: bodycourse_id};
        this.http.post(this.endpoint, body).catch(x => this.handleException(x));
    }

    //get an individual lab
    public getIndLab(labid: number): Observable<Lab[]>{
        return this.http.get<Lab[]>(this.endpoint + labid).catch(x => this.handleException(x));
    }

      //update a individual lab
    public putLab(labid: number, bodytitle: string): Observable<Lab[]> {
        const body = {title: bodytitle};
        return this.http.put(this.endpoint + labid, body).catch(x => this.handleException(x));
    }

      //delete an individual lab
    public deleteIndLab(labid: number): Observable<void>{
        return this.http.delete<void>(this.endpoint + labid).catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }

}
