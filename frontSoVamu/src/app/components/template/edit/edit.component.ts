import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../register/register.module';
import { UsersService } from '../register/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  preserveWhitespaces: true
})
export class EditComponent implements OnInit {

  
  user: User = {
    id: 0,
    nome: '',
    idade: 0,
    profissao: '',
    naturalidade: '',
    peso: 0,
    nascimento: ''
  }

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.userService.readById(id).subscribe(user => {
      this.user = user
    })
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() =>
      this.router.navigate(['/'])
    )
  }
  cancel(): void {
    this.router.navigate(['/'])
  }
}
