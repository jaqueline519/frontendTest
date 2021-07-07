import { Component, OnInit } from '@angular/core';
import { User } from '../register/register.module';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
    id: 0,
    nome: '',
    idade: 0,
    profissao: '',
    naturalidade: '',
    peso: 0,
    nascimento: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
