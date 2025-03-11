import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';


const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  },
  {
    path: 'log-in',
    component: LogInComponent 
  },
  {
    path: 'Navbar',
    component: NavbarComponent,
      children: [
        {
          path:'parent',
          component: ParentcomponentComponent 
        },
        {
          path: 'child',
          component: ChildcomponentComponent
        },
        {
        path: 'log-out',
        component: SignUpComponent
        }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
