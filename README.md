# Atividade Bootstrap: Academia Dev

Página responsiva de uma plataforma de cursos fictícia, feita com **Bootstrap 5** (via CDN), com os 6 componentes pedidos.

## Como rodar no GitHub Codespaces

1. Abra o repositório no Codespaces (**Code → Codespaces → Create codespace on main**).
2. No terminal, rode:

   ```
   python3 -m http.server 8000
   ```

3. Abra a porta **8000** quando o Codespaces oferecer (ou pela aba **Portas**).

## Estrutura

```
├── index.html       # Os 6 componentes com classes do Bootstrap
├── css/style.css    # Poucos ajustes próprios (altura do carrossel etc.)
├── js/script.js     # Preenche o modal e valida o formulário
└── img/             # Imagens dos slides e dos cards
```

## Onde cada requisito aparece

| Componente | Como foi feito |
|---|---|
| Navbar | `navbar navbar-expand-lg` + `collapse`; o hamburger abre com `data-bs-toggle="collapse"` |
| Carrossel | `carousel slide carousel-fade`, setas, `carousel-indicators` e auto-play com `data-bs-ride` |
| Cards | `row-cols-1 row-cols-md-2 row-cols-lg-3` + `card h-100` |
| Tabela | `table table-striped table-hover` dentro de `table-responsive` |
| Formulário | Validação HTML5 (`required`, `type="email"`, `minlength`) com `needs-validation`, `was-validated` e `invalid-feedback` |
| Modal | `modal fade`, aberto com `data-bs-toggle="modal"`; também abre ao enviar o formulário |

**Responsividade:** 1 coluna no celular, 2 no tablet e 3 no desktop; tabela com scroll horizontal no celular.
**Acessibilidade:** `header`, `main`, `section`, `footer`, `nav` com `aria-label`, `aria-expanded` no menu, `aria-labelledby` nas seções e modais, `caption` e `scope` na tabela, `label` em todos os campos e link "Pular para o conteúdo".
