import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class TechnicianAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate() {
        if (this.loginService.isTechnician()) {
            console.log("true");
            return true;
        } else {
            console.log("false");
            this.router.navigate(['/']);
            return false;
        }
    }
}