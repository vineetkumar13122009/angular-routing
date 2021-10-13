import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
faLock = faLock;

loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('',)
});

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void{
    if(this.loginForm.value){
      this.auth.login(this.loginForm.value).subscribe(
        (result)=>{
          this.router.navigate(['admin']);
        },
        (err:Error)=>{
          alert(err.message);
        }
      );
    }
  }
}
