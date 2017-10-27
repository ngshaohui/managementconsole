import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import * as $ from 'jquery';

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
  regn: string;
  fleet: string;
  defectNo: string;
  stn: string;
  dateRaised: number;
  ageing: number;
  ata: number;
  defects: string;
  action: string;
  partDetails: string;
  deferral: string;
  category: string;
  classCode: string;
  priority: number;

  //ideally pull this from api but this is not given
  dummyData = [{
    "header": "Light at Seat 23B spoilt",
    "classCode": "economy",
    "category": "seat",
    "plane": "SWT",
    "description": "needs new lightbulb",
    "priority": 1
  }];

  ngOnInit() {
    this.getDefects();
    $('#myModal').on('hide.bs.modal', function (e) {
    });
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

  //after submitting or dismiss
  private resetFields(): void {
    this.regn = "";
    this.fleet = "";
    this.defectNo = "";
    this.stn = "";
    this.dateRaised = null;
    this.ageing = null;
    this.ata = null;
    this.defects = "",
    this.action = "",
    this.partDetails = "",
    this.deferral = "",
    this.category = "",
    this.classCode = "",
    this.priority = 1;
  }

  // preload the modal fields
  selectTask(defectNo: string) {
    //get the defect
    //load the defect values
  }

  //for demo
  simulateSelect() {
    this.regn = "SWT";
    this.fleet = "A380";
    this.defectNo = "CD123456";
    this.dateRaised = 1508839733245;
    this.ata = 25;
    this.defects = "something",
    this.action = "take a chill pill",
    this.partDetails = "33D2WQFA",
    this.deferral = "Nil stock",
    this.category = "Lavatory",
    this.classCode = "Premium"
  }

}
