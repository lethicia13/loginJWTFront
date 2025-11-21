import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
{
    path:'',
    component: CadastroComponent
},
{
    path:'cadastro',
    component: CadastroComponent
},
{
    path:'login',
    component: LoginComponent
}
];
