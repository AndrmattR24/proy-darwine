import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {

  formReg: FormGroup;

  constructor(private loginService: LoginService, private router: Router){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    this.loginService.registro(this.formReg.value)
    .then(response =>{
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));

  }

  irLogin(){
    this.router.navigate(['login'])
  }
}
