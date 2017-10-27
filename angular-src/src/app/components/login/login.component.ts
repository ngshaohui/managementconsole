import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.username);
    if (this.username == "planner") {
      this.router.navigate(['/planner']);
    } else {
      this.router.navigate(['/supervisor']);
    }
  }

}
