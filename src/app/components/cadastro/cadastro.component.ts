import { Component, inject } from '@angular/core';
import { Usuario } from '../../auth/usuario';
import { LoginService } from '../../auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  usuario: Usuario = {
    id: 0,
    username: '',
    password: '',
    role: 'USER',
  };

  loginService = inject(LoginService);
  router = inject(Router);

  cadastrar() {
    if (!this.usuario.username || !this.usuario.password) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    this.loginService.cadastrar(this.usuario).subscribe({
      next: (response) => {
        alert('Cadastro realizado com sucesso! Faça login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(
          'Erro ao cadastrar usuário: ' +
            (err.error.message || 'Verifique o console.')
        );
        console.error(err);
      },
    });
  }
}
