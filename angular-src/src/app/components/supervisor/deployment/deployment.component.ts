import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {
  technicians: any;

  constructor(
    private apiService: APIService
  ) { }

  ngOnInit() {
    this.initTechs();
  }

  getRandLocation() {
    let locations = [
      "Hanger 2A",
      "Hanger 1C",
      "Hanger 3B",
      "Lounge",
      "Hanger 2C"
    ]
    return locations[this.getRandNum()];
  }

  getRandNum() {
    return Math.floor(Math.random() * 5);
  }

  private initTechs(): void {
    this.apiService.getTechnicians()
      .then(res => {
        this.technicians = res;
      })
      .catch(res => {
        console.log(res);
      });
  }

}
