import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user = {} as User;
  btnContent = '';
  waits = false;
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.btnContent = 'שלח';
  }
  doPost(){
    this.waits = true;
    this.btnContent = 'ממתין לתגובה';
    this.loginservice.postUser(this.user)
  }
  changeName(name:string){
    this.user.name = name;
  }
  changeEmail(email:string){
    this.user.email = email;
  }

}
