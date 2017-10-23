import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

const Routes = {
  login: "http://localhost:3000/auth/login",
  update: "http://localhost:3000/technician"
}

@Injectable()
export class SupervisorService {
  private socket;

  constructor(
    private http: Http
  ) { }

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(Routes.update);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  //TODO specify the interface of the promise being returned
  getTask(id): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http
        .post(Routes.login + id, { headers: headers })
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

}