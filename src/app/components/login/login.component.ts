import { Component, inject, NgModule } from '@angular/core';
import { Login } from '../../auth/login';
import { LoginService } from '../../auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: Login = {
    username: '',
    password: ''
  };

  loginService = inject(LoginService);
  router = inject(Router);

  logar() {
    if (!this.login.username || !this.login.password) {
      alert('Por favor, preencha o usuário e a senha.');
      return;
    }

    this.loginService.logar(this.login).subscribe({
      next: (token) => {
        this.loginService.addToken(token);
        alert('Login realizado com sucesso!');
        this.router.navigate(['/home']); 
      },
      error: (err) => {
        alert('Falha no login. Verifique as credenciais.');
        console.error(err);
      }
    });
  }
}
