import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm
  
  constructor() { }
  
  ngOnInit() {
    this.userForm = {
    name: '',
    email: '',
    password: '',
    }
  }

  onSubmit(){
    console.log(this.userForm)
  }
}
