import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UsersService } from '../register/users.service';
import { User } from '../register/register.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  users: User[] = [];
  id: number = 0
  filter = ''
  constructor(private router: Router, private userService: UsersService) { }
  
  
  ngOnInit(): void {
    this.listUsers()
  }

  listUsers() {
   this.userService.list().subscribe(users => this.users = users)
 }

  
  register(): void {
    this.router.navigate(['/register/create'])
  }

  edit(): void {
    this.router.navigate(['/edit'])
  }

  cancel(): void {
    this.router.navigate(['/'])
  }
  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(() => { 
     
    })
    this.router.navigate(['/'])
    this.modal(0)
    this.listUsers()
  }

  modal(id: number): void {
    this.id = id
    document.getElementById('modal')?.classList.toggle('invisible')
  }
  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.users = this.users.filter(a =>
            a.nome.toUpperCase().indexOf(palavraChave) >= 0
        );
    }
  }
 
}
