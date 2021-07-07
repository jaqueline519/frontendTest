import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { User } from './register.module';
import { Observable } from 'rxjs';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  preserveWhitespaces: true
})
export class RegisterComponent implements OnInit {

 user: User = {
  nome: '',
  idade: 0,
  profissao: '',
  naturalidade: '',
  peso: 0,
  nascimento: ''
 }  
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
      this.userService.create(this.user).subscribe(() => {
        this.router.navigate(['/']) 
      })      
  }
  cancel(): void {
    this.router.navigate(['/'])
  }

}
