# Carvalho Engenharia — Site Institucional

Site moderno em **Next.js 14 + Tailwind CSS**, pronto para deploy na **Vercel**.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deploy: Vercel

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Metadata SEO + fonte
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais + fontes
└── components/
    ├── Header.tsx        # Navegação fixa com scroll effect
    ├── Hero.tsx          # Seção principal (hero)
    ├── About.tsx         # Quem somos + missão/visão/valores
    ├── Services.tsx      # Serviços oferecidos
    ├── Benefits.tsx      # Benefícios da regularização
    ├── WhoShouldRegularize.tsx  # Quem deve regularizar
    ├── Testimonials.tsx  # Depoimentos de clientes
    ├── Contact.tsx       # Formulário + dados de contato
    ├── Footer.tsx        # Rodapé
    └── WhatsAppButton.tsx # Botão flutuante WhatsApp
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

---

## Deploy na Vercel (passo a passo)

### 1. Subir para o GitHub

```bash
git init
git add .
git commit -m "feat: site carvalho engenharia next.js"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/carvalho-engenharia.git
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login (pode usar a conta GitHub)
2. Clique em **"Add New Project"**
3. Importe o repositório `carvalho-engenharia` do GitHub
4. As configurações são detectadas automaticamente (Next.js)
5. Clique em **"Deploy"** — pronto! 🎉

### 3. Conectar seu domínio (carvalho-engenharia.com)

No painel da Vercel:
1. Vá em **Settings → Domains**
2. Adicione `carvalho-engenharia.com` e `www.carvalho-engenharia.com`
3. A Vercel vai mostrar os registros DNS que você precisa configurar

**No painel do seu provedor de domínio, configure:**

| Tipo | Nome | Valor |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

4. Aguarde a propagação DNS (pode levar até 48h, geralmente bem mais rápido)
5. HTTPS é automático — sem custo adicional

> **Importante:** Antes de migrar o domínio, certifique-se de ter feito o deploy com sucesso na Vercel com o domínio padrão `.vercel.app`, para não ter downtime.

---

## Personalizações futuras

- **Fotos reais**: Substitua os dados de depoimentos e adicione imagens de obras reais em `/public/`
- **Formulário de contato**: O formulário atual abre o WhatsApp. Para e-mail real, integre com [Resend](https://resend.com) ou [Formspree](https://formspree.io)
- **Analytics**: Adicione [Vercel Analytics](https://vercel.com/analytics) (gratuito) no `layout.tsx`
- **Google Tag Manager**: Adicione o script no `layout.tsx` para rastreamento de conversões
