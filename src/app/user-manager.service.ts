import { Injectable } from "@angular/core";
import { User } from "./domain/index";

@Injectable()
export class UserManager {
    private _user : User;

    public get user() : User {
        var value = localStorage.getItem("_user");
        return (value
            ? JSON.parse(value) as User
            : undefined
        )
    }
    public set user(value: User){ 
        localStorage.setItem("_user", JSON.stringify(value));
    }
}