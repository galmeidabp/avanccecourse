# 🧠 Avancce Course — Site-Blog em Next.js

Este projeto é um site e blog criado com **Next.js (Pages Router)**, onde os posts são escritos em **Markdown** e renderizados usando **Static Site Generation (SSG)**.  
Foi desenvolvido como forma de praticar conceitos essenciais de geração estática, roteamento dinâmico, estilização com Tailwind CSS e organização de conteúdo dinâmico sem uso de back-end.

🔗 **Acesse o projeto em produção:**  
👉 [https://avanccecourse.vercel.app/](https://avanccecourse.vercel.app/)

---

## ✨ Funcionalidades

- ✅ Listagem de posts escritos em arquivos `.md`
- ✅ Página individual para cada post e curso, com slug dinâmico
- ✅ Renderização de conteúdo com Markdown
- ✅ SEO otimizado com SSG
- ✅ Estilização responsiva com Tailwind CSS

---

## ⚙️ Tecnologias utilizadas

- **Next.js (Pages Router)** — estruturação da aplicação e rotas dinâmicas
- **TypeScript** — tipagem estática para maior segurança no desenvolvimento
- **Tailwind CSS** — framework utilitário para estilização responsiva
- **Gray-Matter** — parser de metadados (frontmatter) dos arquivos Markdown
- **remark + rehype** — conversão do Markdown para HTML
- **fs + path (Node.js)** — leitura dos arquivos do sistema local no momento do build

---


## 🚀 Como rodar localmente

```bash
git clone https://github.com/galmeidabp/avanccecourse.git
cd avanccecourse
npm install
npm run dev
