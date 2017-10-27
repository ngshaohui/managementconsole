import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const Routes = {
    API: "http://db-gateway-siacabindefects.b9ad.pro-us-east-1.openshiftapps.com",
    user: "/getuser",
    technician: "/tech",
    technicians: "/techs",
    defects: "/defects",
    defect: "/defect",
    techDefects: "/techdefects",
    createDefect: "/createdefect",
    assignTech: "/techassign/"
}

@Injectable()
export class APIService {
    authToken: string;
    loggedInAsSupervisor = true;
    loggedInAsPlanner = true;

    constructor(
        private http: Http
    ) { }

    getUser(id: string): Promise<any> {
        let headers = new Headers();
        headers.append('id', id);

        return new Promise((resolve, reject) => {
            this.http
            .get(Routes.API + Routes.user, { headers: headers })
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

    getTechnician(id: string): Promise<any> {
        let headers = new Headers();
        headers.append('id', id);

        return new Promise((resolve, reject) => {
            this.http
            .get(Routes.API + Routes.technician, { headers: headers })
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

    getTechnicians(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.http
            .get(Routes.API + Routes.technicians)
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

    getDefect(id: string): Promise<any> {
        let headers = new Headers();
        headers.append('id', id);

        return new Promise((resolve, reject) => {
            this.http
            .get(Routes.API + Routes.defect, { headers: headers })
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

    getDefects(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.http
            .get(Routes.API + Routes.defects)
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

    getTechDefects(id: string): Promise<any> {
        let headers = new Headers();
        headers.append('id', id);

        return new Promise((resolve, reject) => {
            this.http
            .get(Routes.API + Routes.techDefects, { headers: headers })
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

    assignToDefect(techID: string, defectID: string): Promise<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = {
            id: techID
        }

        return new Promise((resolve, reject) => {
            this.http
            .put(Routes.API + Routes.assignTech + defectID, JSON.stringify(body), {headers: headers})
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

    unassignFromDefect(techID: string, defectID: string): Promise<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = {
            id: techID
        }

        let reqOpt = new RequestOptions({
            headers: headers,
            body: body
         })

        return new Promise((resolve, reject) => {
            this.http
            .delete(Routes.API + Routes.assignTech + defectID, reqOpt)
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

  createDefect(defect: any): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers: headers});
    return new Promise((resolve, reject) => {
      this.http
        .post(Routes.API + Routes.createDefect, JSON.stringify(defect), options)
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
