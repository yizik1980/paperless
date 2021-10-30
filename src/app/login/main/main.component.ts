import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { LoginService } from 'src/app/services/login.service';
import {ToastService} from 'ng-uikit-pro-standard'
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user = new User();
  btnContent = '';
  waits = false;
  constructor(private loginservice:LoginService,
     private toast:ToastService,
     private router:Router) { }

  ngOnInit(): void {
    this.btnContent = 'שלח';
  }
  doPost(){
    if(this.user.validateName && this.user.ValidateEmail ){
      this.waits = true;
      this.btnContent = 'ממתין לתגובה';
      this.loginservice.postUser(this.user).subscribe(res=>{
        this.router.navigate(['success'])
        console.log(res);
      })
      return;
    }
    if(this.user.ValidateNameMessage){
      this.toast.info(this.user.ValidateNameMessage);
    }
    if(this.user.ValidateEmailMessage){
      this.toast.info(this.user.ValidateEmailMessage);
    }
    
  }
  changeName(event:string){
    this.user.name = event;
  }
  changeEmail(event:string){
    this.user.email = event;
  }

}
