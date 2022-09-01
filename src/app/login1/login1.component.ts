import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  loginform!:FormGroup;
  tokens:any;
  loginerror!:string;
  userloginmessage!:string;

  constructor(private fb:FormBuilder,private authhttp:HttpClient,private route:Router) { 
    this.loginform=this.fb.group(
      {
   username:['',Validators.required],
   password:['',Validators.required]
  }
 );
  }

  ngOnInit(): void {
  }
login(){
this.authentication();
}
authentication(){
  const passloginvalues={'email':this.loginform.controls['username'].value, 
  'password':this.loginform.controls['password'].value};
  this.authhttp.post("https://reqres.in/api/login1",passloginvalues,{responseType:"json"})
  .subscribe((response)=>{
this.tokens=response;
//alert("Login Successful");
if(this.tokens!=null){
  this.route.navigate(['/employee']);
}
},
    (error:any)=>{
      this.loginerror=error.error;
      const newLocal = "error:any";
      this.userloginmessage=this.loginerror[error];
alert("Error:" +this.userloginmessage);
    }
    )
  
}
}
