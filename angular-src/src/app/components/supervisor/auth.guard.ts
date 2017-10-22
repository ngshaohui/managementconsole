import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class SupervisorAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate() {
        if (this.loginService.loggedInAsSupervisor) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}