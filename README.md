<div align="center">

<img src="public/images/logo-circle.png" alt="Logo do Sunny's Tur" width="220" />

# Sunny's Tur

**Transfer Executivo Bilíngue em Porto Alegre - Rio Grande do Sul/Brasil**

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A522.12-5FA04E?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deploy-222222?logo=github&logoColor=white)](https://pages.github.com)

</div>

---

## Sobre o projeto

Site institucional do **Sunny's Tur**, empresa de transfer executivo de Porto Alegre - Rio Grande do Sul/Brasil. O motorista, Paulo Cardoso, atende em **inglês, português e espanhol** e faz traslados de aeroporto, hotéis, eventos e viagens corporativas.

O site é uma página única (landing page), rápida e estática, com foco em apresentar a empresa, o motorista e os veículos, e em levar o cliente direto para o contato por WhatsApp.

Acesse em: **https://sunnys-tur.github.io**

## Funcionalidades

- Página única com as seções: apresentação, destaques, motorista, empresa, veículos e contato.
- Três idiomas, cada um com sua própria rota: português (`/`), inglês (`/en/`) e espanhol (`/es/`).
- Modo claro e modo escuro, que segue o sistema e pode ser trocado no cabeçalho (a escolha fica salva no navegador).
- Botões de contato por WhatsApp e telefone em várias partes da página.
- SEO: metadados, Open Graph, dados estruturados (JSON-LD), `hreflang`, sitemap e `robots.txt`.
- Imagens otimizadas automaticamente em WebP e fontes otimizadas pelo Astro.
- Layout responsivo, pensado primeiro para celular.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [Astro](https://astro.build) 7 | Geração do site estático |
| [Tailwind CSS](https://tailwindcss.com) 4 | Estilização e tema (claro/escuro) |
| TypeScript | Dados e traduções tipados |
| [sharp](https://sharp.pixelplumbing.com) | Otimização de imagens |
| `@astrojs/sitemap` e `astro-robots-txt` | Sitemap e robots.txt |
| GitHub Actions + GitHub Pages | Build e publicação automáticos |

## Como rodar localmente

Requisitos: **Node.js 22.12 ou superior** e **pnpm**.

```bash
pnpm install   # instala as dependências
pnpm dev       # servidor de desenvolvimento em http://localhost:4321
pnpm build     # gera o site estático na pasta dist/
pnpm preview   # visualiza o build localmente
```

## Estrutura do projeto

```text
.
├── .github/workflows/deploy.yml   # build e deploy no GitHub Pages
├── public/                        # arquivos servidos como estão (favicon, imagens, og-image)
├── src/
│   ├── assets/images/             # imagens otimizadas (hero, motorista, veículos, empresa)
│   ├── components/                # Header, Hero, TrustBar, Services, About, Vehicles, CTA, Footer
│   ├── config/                    # marca (brand.ts) e imagens (images.ts)
│   ├── data/siteData.ts           # contatos, CNPJ, redes sociais e endereço
│   ├── i18n/                      # traduções: pt.ts, en.ts e es.ts
│   ├── layouts/BaseLayout.astro   # estrutura HTML, SEO e tema
│   ├── pages/                     # index (pt), en/index e es/index
│   └── styles/                    # global.css e theme.css (cores do tema)
└── astro.config.mjs
```

## Como editar o conteúdo

- **Textos e traduções:** `src/i18n/pt.ts`, `src/i18n/en.ts` e `src/i18n/es.ts`. Os três arquivos seguem o mesmo formato (`src/i18n/types.ts`).
- **Contatos, CNPJ, e-mails, Instagram e localização:** `src/data/siteData.ts`.
- **Cores e tema (claro e escuro):** `src/styles/theme.css`.
- **Foto do motorista:** `src/assets/images/about/driver.jpg`.
- **Fotos dos veículos:** pasta `src/assets/images/vehicles/` e lista de itens em `src/i18n/` e `src/components/Vehicles.astro`.

## Deploy

A publicação é automática: a cada push na branch `main`, o workflow `.github/workflows/deploy.yml` instala as dependências, gera o site e publica a pasta `dist/` no GitHub Pages.

Para funcionar, em **Settings → Pages**, a opção **Source** deve estar como **GitHub Actions**.

## Autor

Criado por [Gabriel Fanto Stundner](https://github.com/F4NT0).
