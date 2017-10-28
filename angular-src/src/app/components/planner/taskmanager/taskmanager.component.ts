import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.scss']
})
export class TaskmanagerComponent implements OnInit {

  constructor(
    private apiService: APIService
  ) { }
  defectList: any;
  header: string;
  plane: string;
  dateRaised: number;
  description: string;
  category: string;
  classCode: string;
  priority: number;
  id: string;
  newTask: boolean;

  //ideally pull this from api but this is not given
  dummyData = [{
    "header": "Light at Seat 23B spoilt",
    "classCode": "economy",
    "category": "seats",
    "plane": "SWT",
    "description": "needs new lightbulb",
    "priority": 1
  }];

  ngOnInit() {
    this.getDefects();
  }

  createDefect(): void {
    this.apiService.createDefect(this.dummyData[0]);
  }

  getDefects(): void {
    this.apiService.getDefects()
      .then(res => {
        this.defectList = res;
      })
      .catch(res => {
        console.log(res);
      });
  }

  //handles both new task and update
  confirmTask(): void {
    if (!this.newTask) { //has id
      let data = {
        header: this.header,
        classCode: this.classCode,
        category: this.category,
        plane: this.plane,
        description: this.description,
        priority: this.priority
      }
      this.apiService.updateDefect(data)
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
    } else { //has no id
      let data = {
        header: this.header,
        classCode: this.classCode,
        category: this.category,
        plane: this.plane,
        description: this.description,
        priority: this.priority
      }
      this.apiService.createDefect(data)
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
    }
  }

  // preload the modal fields
  // existing task
  selectTask(defect: any) {
    this.newTask = false;
    this.header = defect.header;
    this.plane = defect.plane.swt,
    this.description = defect.description,
    this.category = defect.category,
    this.classCode = defect.classCode
    this.id = defect.id;
  }

  //for demo
  simulateSelect() {
    this.newTask = true;
    this.header = "Light at Seat 23B spoilt";
    this.plane = "SWT",
    this.description = "",
    this.category = "Seat",
    this.classCode = "Economy"
  }

}
