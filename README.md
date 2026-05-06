# Spartan UI para Angular

> Primitivos de UI acessíveis para Angular. Instale o comportamento. Copie os estilos.

**Site oficial:** [spartan.ng](https://www.spartan.ng/) | **Licença:** MIT | **GitHub:** [spartan-ng/spartan](https://github.com/spartan-ng/spartan)

---

## 1. Visão Geral

O **Spartan UI** nasceu da necessidade de trazer para o Angular uma experiência semelhante ao [shadcn/ui](https://ui.shadcn.com/) do ecossistema React — uma biblioteca que não impõe estilos engessados, mas entrega componentes que você realmente _possui_.

### Filosofia de Design

Diferente de bibliotecas como **Angular Material** (baseada no Material Design do Google) ou **Ant Design** (com um design system corporativo próprio), o Spartan **não tem uma identidade visual fixada**. Sua filosofia é:

- **Instale o comportamento** → via npm (lógica acessível, mantida pelo time)
- **Copie os estilos** → para dentro do seu projeto (você edita, você controla)

Isso significa que não há uma API de tema para aprender. Você muda um arquivo CSS e pronto — sem conflitos de versão, sem esperar pelos mantenedores.

A biblioteca é dividida em duas camadas:

| Camada       | Prefixo | O que faz                     | Como funciona                           |
| ------------ | ------- | ----------------------------- | --------------------------------------- |
| 🧠 **Brain** | `brn`   | Lógica acessível, sem estilos | Instalado via npm, recebe atualizações  |
| ⚡ **Helm**  | `hlm`   | Estilos com Tailwind CSS      | Copiado para seu projeto, você é o dono |

### Tecnologias e Comunidade

O Spartan é construído sobre projetos consolidados: **Radix UI** (padrões de acessibilidade), **Angular Material CDK** (primitivos nativos) e **Tailwind CSS** (estilização). O projeto conta com mais de 300 contribuidores e é open source sob licença MIT.

### Conceitos Técnicos da Biblioteca

Ao explorar o Spartan, você verá algumas características técnicas mencionadas com frequência. Veja o que cada uma significa:

**Construído com Signals do Angular**
Signals são a nova forma reativa do Angular (introduzida no Angular 16+) de gerenciar estado. Pense neles como variáveis que "avisam" automaticamente os componentes quando seu valor muda — sem precisar do Zone.js para detectar as mudanças. Os componentes do Spartan usam Signals internamente, o que os torna mais eficientes e alinhados com o futuro do Angular.

**Compatível com SSR (Server-Side Rendering)**
SSR significa que o HTML da página é gerado no servidor antes de chegar ao navegador, em vez de ser montado pelo JavaScript no cliente. Isso melhora o tempo de carregamento inicial e o SEO. O Spartan garante que seus componentes funcionam corretamente nesse modelo, sem quebrar no servidor.

**Pronto para Zoneless Angular**
O Angular tradicional usa uma biblioteca chamada Zone.js para detectar quando algo mudou e atualizar a tela. O modo Zoneless remove essa dependência, tornando as aplicações mais leves e rápidas. O Spartan já é compatível com esse modo, preparando seu projeto para o futuro do Angular.

**Acessibilidade nativa (ARIA, navegação por teclado, gerenciamento de foco)**
Acessibilidade significa que os componentes funcionam corretamente para pessoas que usam leitores de tela ou navegam pelo teclado (sem mouse). O Spartan implementa isso automaticamente via atributos ARIA (marcações que leitores de tela entendem), suporte a teclas como Tab e Esc, e controle correto de foco entre elementos interativos.

---

## 2. Instalação e Configuração

### Pré-requisitos

- Angular 17+
- Tailwind CSS v4 (recomendado)

### Via CLI (recomendado)

```bash
# 1. Instale a CLI do Spartan
npm install -D @spartan-ng/cli

# 2. Inicialize o Spartan no projeto
ng g @spartan-ng/cli:init

# 3. Gere o tema padrão
ng g @spartan-ng/cli:ui-theme

# 4. Adicione os componentes que precisar
ng g @spartan-ng/cli:ui
```

### Via npm (manual)

```bash
# Instale os primitivos acessíveis (brain)
npm install @spartan-ng/brain

# Instale o Angular CDK (necessário para overlays)
npm install @angular/cdk
```

Depois, configure o `styles.css`:

```css
/* Camadas do Tailwind */
@layer theme, base, components, utilities;
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';

/* Preset do Spartan (já inclui CDK overlay e animações) */
@import '@spartan-ng/brain/hlm-tailwind-preset.css';
```

---

## 3. Componentes Principais

### Tabelas

O Spartan oferece um componente `Table` simples e um `Data Table` avançado com suporte a ordenação e filtros.

```typescript
import {
  HlmTableComponent,
  HlmTrowComponent,
  HlmThComponent,
  HlmTdComponent,
} from '@spartan-ng/ui-table-helm';

@Component({
  standalone: true,
  imports: [HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmTdComponent],
  template: `
    <hlm-table>
      <hlm-trow>
        <hlm-th>Nome</hlm-th>
        <hlm-th>E-mail</hlm-th>
        <hlm-th>Status</hlm-th>
      </hlm-trow>
      <hlm-trow>
        <hlm-td>João Silva</hlm-td>
        <hlm-td>joao@email.com</hlm-td>
        <hlm-td>Ativo</hlm-td>
      </hlm-trow>
    </hlm-table>
  `,
})
export class TabelaComponent {}
```

### Formulários

O Spartan integra-se nativamente com Reactive Forms do Angular:

```typescript
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HlmInputDirective, HlmLabelDirective, HlmButtonDirective],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label hlmLabel for="email">E-mail</label>
      <input hlmInput id="email" formControlName="email" type="email" />

      <label hlmLabel for="senha">Senha</label>
      <input hlmInput id="senha" formControlName="senha" type="password" />

      <button hlmBtn type="submit">Entrar</button>
    </form>
  `,
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}
  onSubmit() {
    console.log(this.form.value);
  }
}
```

### Modais (Dialog)

```typescript
import { BrnDialogTriggerDirective, BrnDialogContentDirective } from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';

@Component({
  standalone: true,
  imports: [
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective,
    HlmButtonDirective,
  ],
  template: `
    <hlm-dialog>
      <button brnDialogTrigger hlmBtn>Abrir Modal</button>
      <hlm-dialog-content *brnDialogContent="let ctx">
        <hlm-dialog-header>
          <h3 hlmDialogTitle>Confirmação</h3>
        </hlm-dialog-header>
        <p>Tem certeza que deseja continuar?</p>
        <button hlmBtn (click)="ctx.close()">Fechar</button>
      </hlm-dialog-content>
    </hlm-dialog>
  `,
})
export class ModalComponent {}
```

### Alertas e Feedback

```typescript
import {
  HlmAlertDirective,
  HlmAlertTitleDirective,
  HlmAlertDescriptionDirective,
} from '@spartan-ng/ui-alert-helm';

@Component({
  standalone: true,
  imports: [HlmAlertDirective, HlmAlertTitleDirective, HlmAlertDescriptionDirective],
  template: `
    <div hlmAlert variant="destructive">
      <p hlmAlertTitle>Erro!</p>
      <p hlmAlertDescription>Não foi possível salvar as alterações.</p>
    </div>
  `,
})
export class AlertaComponent {}
```

> O Spartan não possui um componente de gráficos nativo. Para gráficos, recomenda-se integrar com bibliotecas como **ng2-charts** ou **ngx-echarts** junto aos componentes de layout do Spartan.

---

## 4. Customização

### Sistema de Temas

O Spartan usa **variáveis CSS** para theming — não há uma API de configuração para aprender. Você edita o CSS diretamente.

```css
/* styles.css */
:root {
  --primary: oklch(0.205 0 0); /* cor dos botões e destaques */
  --background: oklch(1 0 0); /* fundo da página */
  --foreground: oklch(0.145 0 0); /* cor padrão do texto */
  --destructive: oklch(0.577 0.245 27.325); /* cor de ações destrutivas */
  --border: oklch(0.922 0 0); /* cor das bordas */
  --radius: 0.625rem; /* arredondamento global */
}
```

Para mudar a cor primária da aplicação inteira, basta alterar `--primary`. Todos os componentes que usam a cor primária serão atualizados automaticamente.

### Dark Mode

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
}
```

Para ativar no Angular:

```typescript
toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
```

### Gerando um Tema via CLI

```bash
ng g @spartan-ng/cli:ui-theme
```

A CLI oferece temas prontos que você pode selecionar e personalizar a partir daí.

### Customizando Estilos de um Componente

Como os arquivos Helm são copiados para o seu projeto, você edita diretamente. Por exemplo, para adicionar uma variante personalizada ao botão:

```typescript
// ui/button/hlm-button.directive.ts (arquivo copiado para o seu projeto)
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent',
        // Sua variante personalizada:
        brand: 'bg-purple-600 text-white hover:bg-purple-700',
      },
    },
  },
);
```

---

## Referências

- [Documentação oficial](https://www.spartan.ng/documentation)
- [Catálogo de componentes](https://www.spartan.ng/components)
- [Repositório no GitHub](https://github.com/spartan-ng/spartan)
- [Paleta de cores e temas](https://www.spartan.ng/colors)
