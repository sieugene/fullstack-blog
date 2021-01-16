const { loadNuxt, build } = require("nuxt");

const app = require("./app");
const isDev = process.env.NODE_ENV !== "production";

async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  app.use(nuxt.render);

  if (isDev) {
    build(nuxt);
  }
  app.listen(port, host, () => {
    consola.ready({
      message: "1Server listening on `localhost:" + port + "`.",
      badge: true
    });
  });
}

start();
