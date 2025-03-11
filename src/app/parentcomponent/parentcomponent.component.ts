import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  userForm: FormGroup;
  storedDataList: any[] = []; 
  selectedUserId: string | null = null; 

  constructor(private fb: FormBuilder) { // Formbuilder used to build a form and add a manully key data 
    this.userForm = this.fb.group({
      id: '',
      firstName: '',
      lastName: '',
      fatherName: '',
      motherName: '',
      contact: '',
    }); 
  }

  ngOnInit() {
    this.loadStoredData();  // to initialize a data component is render 
  }

  FormData() {
    console.log('qqq',this.userForm);
    
    let savedData = localStorage.getItem('userDataList');  // get data from localstorage 
    let dataList = savedData ? JSON.parse(savedData) : []; // check if data is present to convert into object form

    if (this.selectedUserId) {     // it used to update 
      const index = dataList.findIndex((user: any) => user.id === this.selectedUserId);  // it check id ===id so return a index
      if (index !== -1) {
        dataList[index] = { ...this.userForm.value, id: this.selectedUserId };   // update it new value 
      }
      this.selectedUserId = null; // reset the value 
    } else {
      let newUser = { ...this.userForm.value };  // if not to create a new obj and add in datalist 
      dataList.push(newUser);
    }

    localStorage.setItem('userDataList', JSON.stringify(dataList));   //store a new updated data in localstorage 
    this.loadStoredData(); 
    this.userForm.reset();
  }

  loadStoredData() {
    const savedData = localStorage.getItem('userDataList');   //get the data in localstorege and update it storedatalist 
    this.storedDataList = savedData ? JSON.parse(savedData) : [];  // if not data is empty array 
    console.log("Parent Loaded Data:", this.storedDataList); 
  }

  deleteUser(userId: string) {
    let savedData = localStorage.getItem('userDataList');  // get data in localstorage 
    if (savedData) {
      let dataList = JSON.parse(savedData);
      dataList = dataList.filter((user: any) => user.id !== userId);  // check it id is match 
      localStorage.setItem('userDataList', JSON.stringify(dataList)); // to update a new list 
      this.loadStoredData();   // reloaded it  
    }
  }

  GetData(userId: string) {
    const savedData = localStorage.getItem('userDataList');  // get data in localstorage 
    if (savedData) {
      const dataList = JSON.parse(savedData);
      const userData = dataList.find((user: any) => user.id === userId); // id is same 
      if (userData) {
        this.userForm.setValue(userData); // set value in userform 
        this.selectedUserId = userId;  // user it updated
      }
    }
  }
}
