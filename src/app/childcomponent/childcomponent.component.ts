import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit, OnChanges {
  @Input() userDataList: any[] = [];
  @Output() editUser = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<string>();

  ngOnInit(): void {
      console.log(this.userDataList)
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['userDataList']) {
      console.log("Child Received Data:", this.userDataList); 
    }
  }
   
  edit(id: string){
    this.editUser.emit('userDataList')
  }
  delete(id: string){
    this.deleteUser.emit('userDataList')
  }

  
}
