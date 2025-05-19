import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Variáveis para o formulário de login
  usuarioLogin: string = '';
  senhaLogin: string = '';
  
  // Variáveis para o formulário de cadastro
  usuarioCadastro: string = '';
  emailCadastro: string = '';
  senhaCadastro: string = '';
  
  // Controle de exibição do formulário de cadastro
  mostrarFormCadastro: boolean = false;
  
  // Método para alternar a visibilidade do formulário de cadastro
  toggleCadastro() {
    this.mostrarFormCadastro = !this.mostrarFormCadastro;
  }
  
  // Método para processar o login
  login() {
    if (this.usuarioLogin && this.senhaLogin) {
      alert('Login realizado com sucesso!');
      // Aqui você adicionaria a lógica real de autenticação
    }
  }
  
  // Método para processar o cadastro
  cadastro() {
    if (this.usuarioCadastro && this.emailCadastro && this.senhaCadastro) {
      if (this.senhaCadastro.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres.');
        return;
      }
      
      alert('Cadastro realizado com sucesso!');
      // Aqui você adicionaria a lógica real de cadastro
      this.mostrarFormCadastro = false;
    }
  }
}
