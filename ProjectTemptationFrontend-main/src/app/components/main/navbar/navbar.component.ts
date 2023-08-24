import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginService: LoginService, private router: Router){

  }

  onClick(){
    this.loginService.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}
