import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent implements OnInit {
  @Input()
  id: string;
  technician: any;
  name: string;
  location: string;
  numJobs: number;

  constructor() { }

  ngOnInit() {
    this.initDetails();
  }

  mockInitDetails(): void {
    this.name = "John Alpaca";
    this.location = "Currently on tea break";
    this.numJobs = 6;
  }

  private initDetails(): void {
    //call service and populate fields
    //populate technician fields?
  }

}
