// Cloudflare Workers: та же логика. Деплой: `npx wrangler deploy` из папки endpoint/.
// Секрета в Public Key нет, но удобнее хранить его как переменную:
//   npx wrangler secret put DISCORD_PUBLIC_KEY      (или добавить в Settings → Variables)
// Необязательно: PAGE_URL — адрес страницы сайта (например на GitHub Pages), куда браузер
// будет перенаправлен при открытии адреса endpoint.
import { handleRequest } from './handler.mjs';

export default {
  fetch(request, env) {
    return handleRequest(request, env);
  },
};
