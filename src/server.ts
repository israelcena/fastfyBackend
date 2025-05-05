import { buildApp } from './app';

const app = buildApp();
const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';
    await app.listen({port, host});
    console.log(`🚀 Server rodando em http://${host}:${port}`);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
