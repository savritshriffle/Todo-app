import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  @Input() signUp: any[] = [];  // this save the data signup  of add data it recv data from parent component 
  logInObj: any = {  // create obj for field
    email: '',
    password: ''
  }
  
  constructor(private router: Router){}   // when page is lode router help to navigation
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUser');
    if(localData != null){
      this.signUp = JSON.parse(localData);
    }
}
  OnLogIn(){
      const isUserExist = this.signUp.find(m => m.email == this.logInObj.email && m.password == this.logInObj.password);
      if(isUserExist != undefined) {
        alert("Log-In Success");
        this.logInObj = {
          email: '',
          password: ''
        }
        this.router.navigate(['/Navbar']);
      }
      else {
        alert("Something Want Wrong....")
      }
  }
}
