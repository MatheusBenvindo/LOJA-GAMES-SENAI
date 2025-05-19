import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-painel-principal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    });
  }

  editarProduto(id: number): void {
    // Implementação será feita na integração com o componente de cadastro
    console.log('Editar produto:', id);
  }

  excluirProduto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe({
        next: () => {
          this.carregarProdutos();
        },
        error: (error) => {
          console.error('Erro ao excluir produto:', error);
        }
      });
    }
  }
}
