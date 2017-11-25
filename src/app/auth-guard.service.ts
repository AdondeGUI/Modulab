import { CanActivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { UserManager } from "./user-manager.service";
import { Router } from "@angular/router/";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private userManager : UserManager,
        private router: Router
    ) {}

    canActivate(): boolean {
        var isLoggedIn = !!this.userManager.user;

        if(!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }

        return isLoggedIn;
    }
}