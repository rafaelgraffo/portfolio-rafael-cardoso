# Portfólio — Rafael Cardoso

Versão atual do portfólio profissional **Rafael Cardoso — Gestão de TI & Engenharia de Software**.

Site estático, dark premium, identidade visual híbrida **Arcade + RPG + Tecnologia** com
Pixel Art equilibrada, três idiomas funcionais (**PT** padrão, **EN**, **FR**) e conteúdo
multilíngue centralizado.

---

## Stack

- **Vite 8** + **React 19** + **TypeScript** (strict)
- CSS puro com variáveis, sem frameworks de UI e sem fontes externas
- Saída 100% estática em `dist/` (sem backend, sem chamadas a APIs em runtime)

Foi escolhida uma stack simples de manter, com componentes separados e build rápido.
O `base: './'` no `vite.config.ts` permite publicar o `dist/` tanto na raiz de um domínio
quanto num sub-caminho (ex.: GitHub Pages de projeto).

## Comandos

```bash
npm install       # instalar dependências
npm run dev       # servidor de desenvolvimento
npm run build     # typecheck + build de produção em dist/
npm run preview   # servir o build localmente
npm run typecheck # apenas checagem de tipos
```

## Estrutura

```
index.html                  # meta tags, Open Graph, JSON-LD (Person), favicon
public/
  favicon.svg               # pixel art
  robots.txt
  rafael-cardoso.jfif       # foto de perfil pública do GitHub (avatars.githubusercontent.com)
src/
  main.tsx                  # entrada React
  App.tsx                   # composição das secções
  vite-env.d.ts             # tipos do Vite
  i18n/
    types.ts                # interface Translation (contrato único)
    pt.ts / en.ts / fr.ts   # conteúdo visível, por idioma
    context.tsx             # provider, persistência e atualização de metadados
    index.ts                # re-exports
  data/
    links.ts                # GitHub / LinkedIn / caminho da foto
  components/
    Header.tsx  LanguageSwitch.tsx  Section.tsx  Reveal.tsx
    Hero.tsx  About.tsx  Experience.tsx  Technologies.tsx
    Certifications.tsx  Projects.tsx  Contact.tsx  Footer.tsx
    ExternalLink.tsx  PixelDecor.tsx  Visuals.tsx
  styles/
    global.css              # tokens, layout, animações, breakpoints, print
    visuals.css             # camada visual Missão 02 (cenas, molduras, inventário)
```

## Idiomas

- Todo o **conteúdo das secções** (navegação, Hero, secções, botões, `alt` da foto,
  `title`, `meta description`, Open Graph e rodapé) vem de `src/i18n/*.ts`.
  Excepções deliberadas: o `<noscript>` e o bloco JSON-LD em `index.html`, e os nomes
  próprios/URLs derivados em `data/links.ts`.
- A interface `Translation` garante em tempo de compilação que os três idiomas
  tenham **todas** as chaves — não é possível traduzir só o cabeçalho.
- Idioma padrão: **PT**. A escolha é guardada em `localStorage` e refletida na URL
  (`?lang=en`, `?lang=fr`), o que permite partilhar um link já no idioma certo.
- `<html lang>` é atualizado (`pt-BR`, `en`, `fr`) a cada troca, tal como `og:locale`.
- O seletor é um `radiogroup` de três interruptores ON/OFF com acabamento pixel art:
  suporta cliques, `Tab`, setas, `Home`/`End` e `aria-checked`. A troca é anunciada
  por uma região `aria-live`.

### Adicionar / editar texto

1. Edite `src/i18n/pt.ts`, `en.ts` e `fr.ts`.
2. Se adicionar uma chave nova, adicione-a primeiro em `src/i18n/types.ts` — o
   TypeScript apontará os três ficheiros que faltam preencher.
3. Se alterar o posicionamento, alinhe também `index.html` (`title`, `description`,
   OG/Twitter e `jobTitle` do JSON-LD) para não divergir do conteúdo estático.

## Conteúdo — origem e limites

Foram usadas informações públicas verificáveis e dados confirmados pelo próprio Rafael:

| Dado | Origem |
|---|---|
| Nome, utilizador GitHub, foto | `api.github.com/users/rafaelgraffo` + avatar público |
| LinkedIn | Página pública publicada no GitHub Pages |
| Mais de 20 anos de atuação em TI (desde 2005), foco em suporte técnico | Confirmado pelo próprio Rafael (Missão 07 / CVs locais) |
| Transição para Cloud / AWS / DevOps, Java, JS, CSS | README público do perfil GitHub |
| AWS Certified Cloud Practitioner + badge Credly | README público do perfil GitHub |
| Estudo para AWS Solutions Architect Associate | README público do perfil GitHub |
| Formação, certificações e cursos adicionais | Informação fornecida pelo próprio Rafael |

**Não foram inventados** cargos, empresas, datas, estatísticas, resultados,
níveis de senioridade ou competências. A secção *Experience* descreve **áreas de
atuação** (gestão de TI, operações, infraestrutura, suporte, liderança e melhoria
contínua) e não um histórico de empregos fabricado.

A secção *Certifications & Education* usa **quatro grupos** validados:
`academic` (formação académica), `certification` (certificações conquistadas),
`in-progress` (certificação em preparação, sem selo) e `course` (cursos de
formação/capacitação). **ITIL 4 pertence a `course` e não é apresentado como
certificação.**

Pontos que o Rafael deve validar/completar antes de publicar:

- As descrições dos três projetos em `projects.items` estão **deliberadamente
  neutras** (estão comentadas nos ficheiros de idioma). Substituir por texto
  validado e, se existirem, adicionar os URLs reais dos repositórios.
- A secção *Contact* oferece apenas GitHub e LinkedIn; o título "Vamos conversar"
  pode sugerir um canal directo que não existe. Decidir se se mantém ou se ajusta.
- Não foi exposto e-mail, telefone ou outra informação pessoal desnecessária.
- A variante de Português usada é **pt-BR**; se desejar pt-PT, basta editar `pt.ts`
  (e `htmlLangs` em `context.tsx`).
- O nome `"Rafael Soares Cardoso"` aparece **apenas** no JSON-LD de `index.html`;
  confirmar se deve ser mantido, abreviado ou alinhado com o resto do portfólio.

## SEO, acessibilidade e performance

- `title`, `meta description`, Open Graph (com `og:locale` e metadados de imagem),
  Twitter Card, JSON-LD `Person`, `theme-color`, `robots.txt`, headings semânticos
  e `lang` dinâmico.
- Skip link com `<main tabIndex={-1}>`, `radiogroup` com roving tabindex,
  `aria-expanded` no menu móvel (fecha com `Escape`, clique exterior e resize),
  `alt` traduzido, aviso de "abre em nova aba", `:focus-visible`, contraste ≥ 4.5:1,
  `prefers-reduced-motion` e folha de estilos de impressão.
- Sem fontes externas, sem bibliotecas de ícones e sem JS de terceiros.
  Animações discretas com `IntersectionObserver` e `transform`/`opacity`.
- Breakpoints: `1000px` (menu móvel), `912px` (cartões de projeto), `760px`
  (coluna única), `480px` (compacto). Verificado sem overflow horizontal a
  375px, 768px, 912px e desktop.

**Configuração de produção (GitHub Pages):** as URLs absolutas de `canonical`,
`hreflang`, `og:url`, `og:image`, `twitter:image`, JSON-LD e `Sitemap:` apontam para
`https://rafaelgraffo.github.io`. O build usa `base: './'`, pelo que os **assets se
mantêm relativos** e o `dist/` funciona tanto na raiz como num subcaminho de staging.
`public/.nojekyll` impede que o Jekyll do Pages ignore ficheiros; `public/sitemap.xml`
e `public/robots.txt` são copiados para o `dist/`.

**Limitação conhecida:** como a app é uma SPA, crawlers sem JavaScript vêem apenas
o `<noscript>` — uma futura pré-renderização resolveria isso sem alterar o conteúdo.
As variantes de idioma usam `?lang=`, pelo que `hreflang` aponta para URLs com query
string (válido, embora URLs distintas por idioma fossem o ideal).

## Estado desta entrega

Build de produção validado localmente em `dist/` (`npm run build`).

### Site definitivo

**https://rafaelgraffo.github.io/** — servido pelo repositório publicado
`rafaelgraffo.github.io` (ramo `main`), publicado pela Missão 02 a 17/nov.
É o único endereço com conteúdo e o `canonical` de todas as páginas.

### Repositório `portfolio-rafael-cardoso` (cópia / backup)

Criado a 18/nov por autorização explícita, com `main` (código-fonte) e
`gh-pages`. O GitHub recusou desativar o Pages por API
(*"Deactivating GitHub pages for this repository is not allowed"*, HTTP 422),
pelo que o ramo `gh-pages` passou a conter apenas uma página mínima de
**redireccionamento** para `https://rafaelgraffo.github.io/`, com
`rel="canonical"` para a raiz e `noindex`. Assim o endereço
`https://rafaelgraffo.github.io/portfolio-rafael-cardoso/` **não duplica
conteúdo** e encaminha os visitantes para o site definitivo.

Nada foi apagado: o repositório, ambos os ramos e todo o código-fonte
permanecem intactos. Para voltar a publicar o backup basta repor o `dist/`
em `gh-pages` (`npm run build` + push).

### Limites respeitados

Não foram alterados os repositórios/publicações existentes
(`rafaelgraffo.github.io`, `portif-lio`, repo de perfil `rafaelgraffo`) nem os
projectos PALCO Angola, Nativo Sabe e RETROGAMER-1986. Não houve PR nem merge.
Os commits/pushes realizados ocorreram apenas no repositório novo e foram
explicitamente autorizados. O token de autenticação nunca foi escrito em
ficheiros nem no `.git/config`.
