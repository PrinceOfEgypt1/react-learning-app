# Design System - Aplicação de Aprendizagem

Este documento detalha os componentes, tokens e padrões de design utilizados na Aplicação de Aprendizagem.

## 🎨 Tokens de Design

### Cores

| Token                | Valor (Light)   | Valor (Dark)    | Uso                                  |
|----------------------|-----------------|-----------------|--------------------------------------|
| `--color-primary`    | `#4361ee`       | `#6366f1`       | Ações principais, links, destaques   |
| `--color-secondary`  | `#3a86ff`       | `#4f46e5`       | Elementos secundários, ícones        |
| `--color-accent`     | `#7209b7`       | `#8b5cf6`       | Destaques, badges, alertas           |
| `--color-success`    | `#06d6a0`       | `#059669`       | Confirmações, conclusões             |
| `--color-background` | `#f0f5ff`       | `#0f172a`       | Fundo da aplicação                   |
| `--color-surface`    | `#ffffff`       | `#1e293b`       | Superfícies de cards, modais         |
| `--color-text`       | `#1e293b`       | `#f8fafc`       | Texto principal                      |
| `--color-text-secondary` | `#475569`  | `#cbd5e1`       | Texto secundário, subtítulos         |
| `--color-border`     | `#e2e8f0`       | `#334155`       | Bordas, separadores                  |
| `--color-error`      | `#ef4444`       | `#dc2626`       | Erros, alertas                       |

### Tipografia

| Token                       | Valor                            | Uso                             |
|-----------------------------|----------------------------------|---------------------------------|
| `--font-sans`               | `'Inter', system-ui, sans-serif` | Texto geral                     |
| `--font-heading`            | `'Poppins', system-ui, sans-serif` | Títulos, cabeçalhos           |
| `--font-mono`               | `'Fira Code', monospace`         | Código, dados técnicos          |
| `--font-size-xs`            | `0.75rem` (12px)                 | Texto muito pequeno             |
| `--font-size-sm`            | `0.875rem` (14px)                | Texto pequeno                   |
| `--font-size-base`          | `1rem` (16px)                    | Texto padrão                    |
| `--font-size-lg`            | `1.125rem` (18px)                | Texto grande                    |
| `--font-size-xl`            | `1.25rem` (20px)                 | Subtítulos                      |
| `--font-size-2xl`           | `1.5rem` (24px)                  | Títulos secundários             |
| `--font-size-3xl`           | `1.875rem` (30px)                | Títulos primários               |
| `--font-size-4xl`           | `2.25rem` (36px)                 | Títulos principais              |
| `--font-weight-normal`      | `400`                            | Texto normal                    |
| `--font-weight-medium`      | `500`                            | Ênfase média                    |
| `--font-weight-semibold`    | `600`                            | Subtítulos                      |
| `--font-weight-bold`        | `700`                            | Títulos, destaques              |
| `--line-height-none`        | `1`                              | Sem espaçamento                 |
| `--line-height-tight`       | `1.25`                           | Espaçamento reduzido            |
| `--line-height-normal`      | `1.6`                            | Espaçamento padrão              |
| `--line-height-relaxed`     | `1.8`                            | Espaçamento ampliado            |

### Espaçamentos

| Token          | Valor        | Tamanho real |
|----------------|--------------|--------------|
| `--spacing-0`  | `0`          | 0px          |
| `--spacing-1`  | `0.25rem`    | 4px          |
| `--spacing-2`  | `0.5rem`     | 8px          |
| `--spacing-3`  | `0.75rem`    | 12px         |
| `--spacing-4`  | `1rem`       | 16px         |
| `--spacing-5`  | `1.25rem`    | 20px         |
| `--spacing-6`  | `1.5rem`     | 24px         |
| `--spacing-8`  | `2rem`       | 32px         |
| `--spacing-10` | `2.5rem`     | 40px         |
| `--spacing-12` | `3rem`       | 48px         |
| `--spacing-16` | `4rem`       | 64px         |
| `--spacing-20` | `5rem`       | 80px         |
| `--spacing-24` | `6rem`       | 96px         |
| `--spacing-32` | `8rem`       | 128px        |
| `--spacing-40` | `10rem`      | 160px        |
| `--spacing-48` | `12rem`      | 192px        |
| `--spacing-64` | `16rem`      | 256px        |

### Border Radius

| Token             | Valor        | Uso                          |
|-------------------|--------------|------------------------------|
| `--radius-none`   | `0`          | Sem arredondamento           |
| `--radius-sm`     | `0.25rem`    | Arredondamento sutil         |
| `--radius-md`     | `0.5rem`     | Arredondamento padrão        |
| `--radius-lg`     | `0.75rem`    | Arredondamento maior         |
| `--radius-xl`     | `1rem`       | Arredondamento grande        |
| `--radius-full`   | `9999px`     | Circular (botões, badges)    |

### Sombras

| Token         | Valor                                                                          | Uso                      |
|---------------|--------------------------------------------------------------------------------|--------------------------|
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)`                | Elevação sutil           |
| `--shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`      | Elevação média           |
| `--shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`    | Elevação grande          |
| `--shadow-xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`  | Elevação muito grande    |

### Breakpoints

| Token              | Valor        | Uso                               |
|--------------------|--------------|-----------------------------------|
| `--breakpoint-sm`  | `640px`      | Dispositivos móveis               |
| `--breakpoint-md`  | `768px`      | Tablets                           |
| `--breakpoint-lg`  | `1024px`     | Laptops/Desktops pequenos         |
| `--breakpoint-xl`  | `1280px`     | Desktops                          |

### Z-index

| Token           | Valor        | Uso                               |
|-----------------|--------------|-----------------------------------|
| `--z-base`      | `0`          | Base (conteúdo normal)            |
| `--z-dropdown`  | `10`         | Dropdowns, tooltips               |
| `--z-sticky`    | `100`        | Headers fixos                     |
| `--z-fixed`     | `1000`       | Elementos fixos na tela           |
| `--z-modal`     | `1300`       | Modais, diálogos                  |
| `--z-toast`     | `1400`       | Notificações toast                |

### Transitions

| Token                  | Valor                                 | Uso                           |
|------------------------|-----------------------------------------|-----------------------------|
| `--transition-fast`    | `150ms cubic-bezier(0.4, 0, 0.2, 1)`    | Transições rápidas          |
| `--transition-normal`  | `300ms cubic-bezier(0.4, 0, 0.2, 1)`    | Transições padrão           |
| `--transition-slow`    | `500ms cubic-bezier(0.4, 0, 0.2, 1)`    | Transições longas           |

## 📦 Componentes

### Button

O componente Button é utilizado para ações e interações do usuário.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (padrão: 'primary')
- `size`: 'sm' | 'md' | 'lg' (padrão: 'md')
- `isLoading`: boolean - Exibe um spinner durante carregamento
- `icon`: ReactNode - Ícone opcional
- `iconPosition`: 'left' | 'right' (padrão: 'left')
- `disabled`: boolean - Desativa o botão
- `className`: string - Classes adicionais

**Variantes:**
- `primary` - Ação principal, destaque visual
- `secondary` - Ação secundária ou alternativa
- `outline` - Versão com bordas e fundo transparente

### Card

O componente Card é usado para exibir conteúdo agrupado com aparência consistente.

**Props:**
- `title`: string - Título do card
- `subtitle`: string (opcional) - Texto secundário
- `to`: string (opcional) - Link de destino
- `disabled`: boolean - Estado desabilitado
- `isPopular`: boolean - Destaque visual (badge)
- `index`: number - Para animações escalonadas

### Container

Componente para layouts responsivos com margens e largura máxima.

**Props:**
- `fluid`: boolean - Remove a largura máxima
- `narrow`: boolean - Usa largura reduzida para conteúdo de leitura
- `as`: keyof JSX.IntrinsicElements - Elemento a ser renderizado (padrão: 'div')

### Grid e GridItem

Sistema de grade flexível e responsivo.

**Grid Props:**
- `cols`: 1-6 | 'auto-fill' | 'auto-fit' - Número de colunas
- `gap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Espaçamento entre itens
- `rowGap` / `colGap` - Espaçamento específico para linhas/colunas
- `minWidth`: string - Largura mínima dos itens ('auto-fill'/'auto-fit')

**GridItem Props:**
- `span`: 1-6 | 'full' - Número de colunas a ocupar
- `spanSm/Md/Lg/Xl` - Comportamento responsivo por breakpoint

### ThemeToggle

Botão para alternar entre temas claro e escuro.

### HighContrastToggle

Botão para ativar/desativar modo de alto contraste (acessibilidade).

### SkeletonLoader

Componente de carregamento para diferentes tipos de conteúdo.

**Props:**
- `type`: 'page' | 'card' | 'text' | 'hero' - Tipo de skeleton
- `count`: number - Quantidade de skeletons a serem exibidos

### SkipToContent

Link de acessibilidade que permite pular para o conteúdo principal.

## 🖌️ Padrões de UI/UX

### Layout Padrão

```
<Header />
  <SkipToContent />
  <Logo />
  <Navigation />
  <ThemeControls />
<Main />
  <Container>
    {children}
  </Container>
<Footer />
```

### Modais e Diálogos

- Foco gerenciado dentro do modal
- Escape fecha o modal
- Overlay clicável fecha o modal
- Botão explícito de fechamento

### Feedback de Carregamento

- Skeleton loaders durante carregamento inicial
- Indicadores de progresso para operações longas
- Feedback visual imediato para interações

### Navegação e Links

- Links com visual distinto
- Indicadores de estado ativo
- Feedback hover/focus
- Botões "voltar" e navegação de breadcrumb

### Responsividade

- Layouts adaptados a diferentes breakpoints
- Touch targets adequados (mínimo 44×44px) em mobile
- Design mobile-first com melhorias progressivas

### Acessibilidade

- Suporte a alto contraste
- Navegação por teclado
- ARIA landmarks e roles
- Skip links
- Alternativas textuais para elementos visuais

## 📏 Guias de Estilo e Uso

### Cores

- Usar cores primárias para elementos de ação
- Cores secundárias para elementos de suporte
- Cores de erro apenas para estados negativos
- Manter contraste adequado (4.5:1 para texto normal, 3:1 para texto grande)

### Tipografia

- Fonte principal (Inter) para texto de leitura
- Fonte de títulos (Poppins) para cabeçalhos
- Respeitar hierarquia visual (h1 > h2 > h3)
- Manter largura de leitura confortável (45-75 caracteres)

### Botões e Interações

- Botões primários para ações principais
- Botões secundários para ações alternativas
- Feedback visual em todos os estados (hover, focus, active, disabled)
- Animações sutis para feedback de interação

### Formulários

- Labels claros e associados aos campos
- Mensagens de erro específicas e próximas aos campos
- Estados de validação visíveis e acessíveis
- Agrupamento lógico de campos relacionados

### Iconografia

- Usar ícones consistentes de mesma família
- Sempre fornecer texto alternativo para ícones funcionais
- Tamanho mínimo de 16×16px (preferencialmente 24×24px)
- Ícones decorativos marcados como `aria-hidden="true"`
