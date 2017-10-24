import { Component, OnInit } from '@angular/core';

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
  }

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
    this.classCode = ""
  }

  // preload the modal fields
  selectTask(defectNo: string) {
    //get the defect
  }

  simulateSelect() {
    ;
  }

}
