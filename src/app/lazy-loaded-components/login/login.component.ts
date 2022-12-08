import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm!:FormGroup

  constructor(private userService:UserService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.logInForm=this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })
  }


  signIn(){
    let formData=this.logInForm.value;
    let data={
      username:formData.username,
      password:formData.password
    }
    console.log(data)
    this.userService.logIn(data).subscribe((response:any)=>{
      console.log(response)
    },(error:any)=>{
alert(error.error.message)
    })

  }

}
