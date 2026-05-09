# Carvalho Engenharia — Landing Page

Dark theme no estilo Nexus TI, com azul royal (#1E3FD8) consistente.

## Estrutura de arquivos para comitar

```
app/
  globals.css          ← CSS principal (dark theme + azul royal)
  layout.tsx           ← Metadata, SEO, fontes
  page.tsx             ← Composição das seções

components/
  navbar.tsx           ← Navbar com topbar de contato
  hero.tsx             ← Hero com typewriter
  empresa.tsx          ← Quem somos, missão, visão, valores, stats
  services.tsx         ← 4 serviços em grid 2x2
  benefits.tsx         ← Benefícios da regularização (checklist)
  who-precisa.tsx      ← Quem precisa regularizar
  testimonials.tsx     ← Depoimentos
  cta-section.tsx      ← Contato + formulário Formspree
  footer.tsx           ← Rodapé

  ui/
    button.tsx         ← Componente Button (shadcn)

lib/
  utils.ts             ← cn() utility

package.json
next.config.mjs
tsconfig.json
postcss.config.mjs
```

## ⚠️ Passo importante — Formspree

No `cta-section.tsx`, substitua o ID do Formspree:
```tsx
const [state, handleSubmit] = useForm("SEU_FORM_ID_AQUI")
```
Crie um form em https://formspree.io e cole o ID.

## Cores

| Token       | Valor       |
|-------------|-------------|
| Azul royal  | #1E3FD8     |
| Fundo       | #080808     |
| Card        | #0f0f0f     |
| Borda       | #1a1a1a     |
| Texto mudo  | #888888     |

## Deploy

Já está configurado para Vercel. Só commitar e fazer push.
