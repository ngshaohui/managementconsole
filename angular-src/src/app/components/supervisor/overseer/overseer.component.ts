import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-overseer',
  templateUrl: './overseer.component.html',
  styleUrls: ['./overseer.component.scss']
})
export class OverseerComponent implements OnInit {
  numTechniciansDeployed: string;
  technicians: any;
  defects: any;
  curDefectID: string;
  modalHeader: string;
  modalDescription: string;
  modalETA: string;
  modalETD: string;
  modalTechsAssigned: any;
  modalUnassignedTechs: any;
  modalDateReported: string;
  modalCategory: string;
  modalSpares: any;
  modalUpdates: any;
  techIDs = [4, 5, 7, 8, 9];
  techObj: any;

  constructor(
    private apiService: APIService,
    private dragulaService: DragulaService
  ) {
    this.techObj = {
      "Jack": 4,
      "Shao Hui": 7,
      "Yu Jia": 8,
      "Adam": 9
    }
    //temp binding solution
    this.dragulaService.drop.subscribe((value) => {
      let tech = value[1].innerText;
      let techID = this.techObj.tech;
      let wasNotAssigned = false;
      for (let i = 0, len = this.modalUnassignedTechs.length; i < len; i++) {
        //check if person was unassigned
        let curPerson = this.modalUnassignedTechs[i];
        // console.log(curPerson);
        if (curPerson.user.first_name == tech) {
          wasNotAssigned = true;
          techID = curPerson.user.id;
          break;
        }
      }
      for (let i = 0, len = this.modalTechsAssigned.length; i < len; i++) {
        //check if person was unassigned
        let curPerson = this.modalTechsAssigned[i];
        if (curPerson.user.first_name == tech) {
          techID = curPerson.user.id;
          break;
        }
      }
      if (wasNotAssigned) {
        this.apiService.assignToDefect(techID, this.curDefectID)
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
      } else {
        this.apiService.unassignFromDefect(techID, this.curDefectID);
      }
    });
  }

  ngOnInit() {
    this.initTechs();
    this.initDefects();
  }

  confirmAssign() {
    console.log(this.modalTechsAssigned);
    console.log(this.modalUnassignedTechs);
  }

  //populate the modal fields
  selectDefect(defectID: string): void {
    for (let i = 0, len = this.defects.length; i < len; i++) {
      let cur = this.defects[i];
      if (cur.id == defectID) {
        //populate
        this.curDefectID = cur.id;
        this.modalHeader = cur.header;
        this.modalETA = this.formatDate(new Date(cur.plane.ETA));
        this.modalETD = this.formatDate(new Date(cur.plane.ETD));
        this.modalTechsAssigned = cur.techsAssigned;
        this.modalDateReported = this.formatDate(new Date(cur.dateReported));
        this.modalCategory = cur.category;
        this.modalSpares = cur.spares;
        this.modalUpdates = cur.updates;
        this.getUnassignedTechs(cur.techsAssigned);
      }
    }
  }

  getUnassignedTechs(assignedTechs) {
    //temp cheaty method
    this.modalUnassignedTechs = []; //clear array
    for (let i = 0, len = this.techIDs.length; i < len; i++) {
      let present = false;
      //check if tech has been assigned to task
      for (let j = 0, len2 = assignedTechs.length; j < len2; j++) {
        if (this.techIDs[i] == assignedTechs[j].user.id) {
          present = true;
        }
      }
      if (!present) {
        for (let k = 0, len3 = this.technicians.length; k < len3; k++) {
          if (this.technicians[k].user.id == this.techIDs[i]) {
            this.modalUnassignedTechs.push(this.technicians[k]);
          }
        }
      }
    }
  }

  //temp filler method for max assigned to task
  calcTechniciansDeployed() {
    let max = 0;
    for (var i = 0, len = this.defects.length; i < len; i++) {
      let cur = this.defects[i];
      if (cur.techsAssigned.length > max) {
        max = cur.techsAssigned.length;
      }
    }
    this.numTechniciansDeployed = max + '/' + this.technicians.length;
  }

  private initDefects(): void {
    this.apiService.getDefects()
    .then(res => {
      this.defects = res;
      this.calcTechniciansDeployed();
    })
    .catch(res => {
      console.log(res);
    });
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

  private formatDate(date): string {
    console.log("formatting")
    console.log(date)
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
