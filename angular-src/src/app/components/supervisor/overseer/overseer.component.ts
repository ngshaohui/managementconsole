import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overseer',
  templateUrl: './overseer.component.html',
  styleUrls: ['./overseer.component.scss']
})
export class OverseerComponent implements OnInit {
  @Input()
  id: String;

  constructor() { }

  ngOnInit() {
  }

}
/*
Should take in the task id
task id will then give the list of people currently working on a task
should be able to assign people to the task
*/