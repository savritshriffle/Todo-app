import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUp: any[] = [];  // store the array form data 
  signUpObj: any = {  // create a obj for define a filds 
    userName: '',
    email: '',
    password: ''
  }
  isSignedUp = false;   // current value is false 
  
OnSignUp(){
  this.signUp.push(this.signUpObj);  // signup array obj field add it 
  localStorage.setItem('signUpUser', JSON.stringify(this.signUp))  // save data in localstorage and convert string format 
  this.signUpObj = { // refresh fields 
  userName: '',
  email: '',
  password: '',
}
  this.isSignedUp = true;     // signup is success the value true 
}  
}
