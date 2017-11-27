import { Injectable } from "@angular/core";
import { Lab } from './../models/lab';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserManager } from "../../user-manager.service"
import { Module } from "../index";

@Injectable()
export class ModuleRepository {
    protected endpoint = 'http://52.15.171.47/labs/';

    constructor(
        protected http: HttpClient,
        private userManager: UserManager
    ) {}

    //get all modules for a particular lab
    public getLabModules(labid: number): Observable<Module[]>{
        return this.http.get<Module[]>(this.endpoint + labid +'/modules').catch(x => this.handleException(x));
    }

      //create a new module on a lab 
    public postModule(labid: number, bodytype: string, bodydata: string): Observable<Module[]> {
        const body = {type:bodytype, data: bodydata};
        return this.http.post(this.endpoint + labid +'/modules', body).catch(x => this.handleException(x));
    }

    //get an individual module
    public getIndModule(labid: number, moduleid: number): Observable<Module[]>{
        return this.http.get<Module[]>(this.endpoint+ labid + '/modules/' + moduleid).catch(x => this.handleException(x));
    }

    // //update a module on a lab lab
    // public putModule(labid: number, moduleid: number, bodytype: string, bodydata: JSON): Observable<Module[]> {
    //     const body = {type:bodytype, data: JSON.stringify(bodydata)};
    //     return this.http.put(this.endpoint + labid +'/modules/' + moduleid, body).catch(x => this.handleException(x));
    // }

      //delete an individual module
    public deleteModule(labid: number, moduleid: number): Observable<void>{
        return this.http.delete<void>(this.endpoint+ labid + '/modules/'  + moduleid).catch(x => this.handleException(x));
    }

    //delete all modules for a particular lab
    public deleteAllModules(labid: number): Observable<void>{
        return this.http.delete<void>(this.endpoint + labid + '/modules/').catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }

}