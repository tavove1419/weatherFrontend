import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { InitSessionComponent } from './init-session/init-session.component';


import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    InitSessionComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ButtonModule
  ]
})
export class LoginModule { }
