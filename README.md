Site: https://pdrdesign.com.br

Landing page para apresentação de serviços de **design gráfico e identidade visual**, com foco em conversão de clientes.

## ✦ Objetivo
Apresentar portfólio, serviços e direcionar visitantes para contato e contratação.

## ✦ Tecnologias
- HTML
- Tailwind CSS (compilado em `css/site.min.css`)
- JavaScript
- GitHub Pages (deploy)

## ✦ Como editar o CSS
O Tailwind não é mais carregado via CDN (ele compilava o CSS no navegador de
cada visitante e deixava o site lento). Agora o CSS é gerado uma vez e salvo em
`css/site.min.css`, que é o arquivo usado pelo `index.html`.

- Estilos próprios: edite `src/style.css`
- Classes Tailwind: continue usando no `index.html` normalmente
- Depois de qualquer mudança, gere o CSS de novo e faça commit do `css/site.min.css`:

```bash
npm install      # só na primeira vez
npm run build:css    # gera css/site.min.css
npm run dev:css      # (opcional) regenera automaticamente enquanto você edita
```

## ✦ Estrutura
- **Hero** — apresentação principal
- **Serviços** — o que é oferecido
- **Portfólio / motions** — trabalhos realizados
- **Call to Action** — botão de contato
- **Responsivo** — desktop + mobile

## ✦ Performance
- CSS do Tailwind pré-compilado (sem JavaScript do CDN)
- ícones em SVG inline (sem Font Awesome)
- fontes hospedadas no próprio site com `font-display: swap`
- imagens em WebP com tamanhos responsivos (`srcset`) e `loading="lazy"`
- vídeos só são baixados quando chegam perto da tela e pausam fora dela

## ✦ Autor
Gabriel Fantin
