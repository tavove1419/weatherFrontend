import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { AuthenticationService } from '../autentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-session',
  templateUrl: './init-session.component.html',
  styleUrls: ['./init-session.component.scss'],
  providers: [FormBuilder, MessageService, AuthenticationService, LoginService]
})
export class InitSessionComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService, private loginService:LoginService, private authenticationService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async getLogin(){
    const validate = await this.validateData();
    if (validate !== false) {
      const params = {params: this.formLogin.value};
      this.loginService.openLogin(params).subscribe((data) => {
        if(data != false) {
          sessionStorage.setItem('Token', data.token);
          sessionStorage.setItem('id', data.id);
          sessionStorage.setItem('name', data.name);
          sessionStorage.setItem('surname', data.lastname);
          this.isLogged();
        } else {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Usuario y/o Contraseña no valido'});
        }
      });
    }
  }

  validateData() {
    const dataUser = this.formLogin.value.user;
    const datapass = this.formLogin.value.password;
    if(!dataUser) {
      this.messageService.add({severity:'warn', summary: 'Error', detail: 'Ingresar Usuario'});
      return false
    }
    if(!datapass) {
      this.messageService.add({severity:'warn', summary: 'Error', detail: 'Ingresar Contraseña'});
      return false
    }
  }

  isLogged() {
    if (this.authenticationService.isLogged()) {
       this.route.navigateByUrl('weather');
    }
  }

  eventEnter(e) {
    if (e === 13) {
      this.getLogin();
    }
  }
}
