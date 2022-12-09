import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staggering, fade } from 'src/app/helpers/animations';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[
    staggering,fade
  ]
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup

  constructor(private userService: UserService, private fb: FormBuilder, private router:Router,private share:SharedDataService) { 
  }
  ngOnInit(): void {
    this.logInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }


  signIn() {
    let formData = this.logInForm.value;
    let data = {
      username: formData.username,
      password: formData.password
    }
    this.userService.logIn(data).subscribe((response: any) => {
      console.log(response)
      this.share.token.next(response.token);
      localStorage.setItem("token",JSON.stringify(response.token))

      // here user is authenticated
      this.userService.isLoggedIn=true

      this.router.navigate(['/features/products']);

    }, (error: any) => {
      alert(error.error.message)
    })

  }

}
