import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'super-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class SupervisorNavbarComponent implements OnInit {
  sidebarVisible: boolean;
  sidebarState: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.sidebarVisible = true;
    this.sidebarState = "collapse";
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleSidebarState(): void {
    if (this.sidebarState === "expand") {
      this.sidebarState = "collapse";
    } else {
      this.sidebarState = "expand";
    }
  }

}
