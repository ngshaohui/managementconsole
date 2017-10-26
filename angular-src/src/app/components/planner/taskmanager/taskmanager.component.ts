import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.scss']
})
export class TaskmanagerComponent implements OnInit {

  constructor() { }
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

  dummy = {
    regn: "SWT",
    fleet: "A380",
    defectNo: "CD123456",
    stn: "SIN",
    dateRaised: 1508839733245,
    ageing: 12,
    ata: 25,
    defects: "your mom",
    action: "take a chill pill",
    partDetails: "33D2WQFA",
    deferral: "Nil stock",
    category: "Lavatory",
    classCode: "Premium"
  }

  ngOnInit() {
    $('#myModal').on('hide.bs.modal', function (e) {
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
    this.stn = "SIN";
    this.dateRaised = 1508839733245;
    this.ageing = Math.floor((new Date().getTime() - this.dateRaised) / (1000*60*60*24));
    this.ata = 25;
    this.defects = "your mom",
    this.action = "take a chill pill",
    this.partDetails = "33D2WQFA",
    this.deferral = "Nil stock",
    this.category = "Lavatory",
    this.classCode = "Premium"
  }

  assignTask() {
    ;
  }


}
