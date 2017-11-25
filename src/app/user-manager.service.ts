import { Injectable } from "@angular/core";
import { User } from "./domain/index";

@Injectable()
export class UserManager {
    private _user : User;

    public get user() : User {
        return this._user; 
    }
    public set user(value: User){
        this._user = value; 
    }
}