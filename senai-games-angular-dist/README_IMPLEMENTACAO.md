# Instruções para Execução do Projeto

## Configuração do Ambiente

1. Instale o JSON Server globalmente (se ainda não tiver):
```bash
npm install -g json-server
```

2. Inicie o servidor JSON para simular a API:
```bash
cd senai-games-angular-dist
json-server --watch db.json
```

3. Em outro terminal, inicie a aplicação Angular:
```bash
cd senai-games-angular-dist
ng serve
```

## Funcionalidades Implementadas

1. **Serviço de API de Produtos**
   - Criado o serviço ProdutoService para consumo da API
   - Implementados métodos para listar, adicionar, editar e excluir produtos

2. **Componente Menu**
   - Adicionado menu de navegação com links para o Painel Principal e Cadastro
   - Estilizado com Bootstrap para uma experiência responsiva

3. **Componente Painel Principal**
   - Implementada listagem de produtos em formato de tabela
   - Adicionados botões para editar e excluir produtos
   - Integração com o serviço de API para exibir dados em tempo real

4. **Componente Cadastro de Produtos**
   - Formulário para adicionar novos produtos
   - Funcionalidade de edição de produtos existentes
   - Validação de campos obrigatórios
   - Navegação automática após salvar

## Estrutura do Projeto

```
senai-games-angular-dist/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cadastro-produto/
│   │   │   ├── footer/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── menu/
│   │   │   ├── navbar/
│   │   │   └── painel-principal/
│   │   ├── services/
│   │   │   └── produto.service.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── css/
│   │   └── imagens/
│   └── index.html
└── db.json
```

## Observações

- O projeto mantém todas as funcionalidades originais intactas
- Foram adicionados apenas os componentes e serviços solicitados
- A navegação foi integrada para permitir acesso às novas funcionalidades
- O JSON Server simula uma API REST para testes locais
