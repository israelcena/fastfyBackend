import Fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';

export function buildApp() {
  const app = Fastify({ logger:true });

  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);
    reply.status(error.statusCode ?? 500).send({
      error: error.name,
      message: error.message,
    });
  });

  app.register(cors, {
    origin: '*',
  });
  
  app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'supersecret',
  });

  app.get('/', async () => {
    return { hello: 'world' };
  });

  return app;
};
