import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  register(nome: string, apelido: string, email: string, password: string) {
    console.log(nome, apelido, email, password);
  }

}