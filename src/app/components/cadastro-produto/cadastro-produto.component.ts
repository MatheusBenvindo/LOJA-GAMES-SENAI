import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto: any = {
    id: null,
    produto: '',
    descricao: '',
    foto: '',
    preco: 0
  };
  
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.carregarProduto(id);
      }
    });
  }

  carregarProduto(id: number): void {
    this.produtoService.obterProdutoPorId(id).subscribe({
      next: (data) => {
        this.produto = data;
      },
      error: (error) => {
        console.error('Erro ao carregar produto:', error);
      }
    });
  }

  salvarProduto(): void {
    if (this.produto.id) {
      // Atualizar produto existente
      this.produtoService.atualizarProduto(this.produto.id, this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/painel-principal']);
        },
        error: (error) => {
          console.error('Erro ao atualizar produto:', error);
        }
      });
    } else {
      // Adicionar novo produto
      this.produtoService.adicionarProduto(this.produto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/painel-principal']);
        },
        error: (error) => {
          console.error('Erro ao cadastrar produto:', error);
        }
      });
    }
  }
}
