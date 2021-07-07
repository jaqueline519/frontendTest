import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/template/edit/edit.component';
import { HomeComponent } from './components/template/home/home.component';
import { RegisterComponent } from './components/template/register/register.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register/create', component: RegisterComponent},
  {path: 'edit', component: EditComponent},
  {path: "edit/update/:id", component: EditComponent},
  {path: "edit/delete/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
