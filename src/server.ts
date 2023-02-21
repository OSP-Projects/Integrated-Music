import fastifyRegister from './fastifyRegisters';

fastifyRegister().then((fastify) => {
  fastify.ready((err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    fastify.listen({ port: fastify.env.PORT, host: fastify.env.HOST }).catch((e) => {
      fastify.log.error(e);
      process.exit(1);
    });
  });
}).catch((err: Error) => { console.error(err.message); });