import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { tokenNotExpired } from 'angular2-jwt';

const AuthRoutes = {
    login: "http://localhost:3000/auth/login"
}

@Injectable()
export class LoginService {
    authToken: string;
    loggedInAsSupervisor = true;
    loggedInAsPlanner = true;

    constructor(
        private http: Http
    ) { }

    isPlanner(): boolean {
        return this.loggedInAsPlanner;
    }
    
    isSupervisor(): boolean {
        return this.loggedInAsSupervisor;
    }

    //TODO specify the interface of the promise being returned
    login(form): Promise<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let credentials = {
            username: form.username,
            password: form.password
        }

        return new Promise((resolve, reject) => {
            this.http
            .post(AuthRoutes.login, credentials, { headers: headers })
            .subscribe(
                data => {
                    resolve(data.json());
                },
                err => {
                    reject(err);
                }
            );
        });
    }

    getToken(): string {
        return localStorage.getItem('id_token');
    }

    // isLoggedIn(): boolean {
    //     return tokenNotExpired('id_token');
    // }

    storeUserData(token): void {
        localStorage.setItem('id_token', token);
        this.authToken = token;
    }

    logout(): void {
        localStorage.clear();
        this.authToken = null;
    }

}