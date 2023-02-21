import RegisterDecoraters from '@handlers/RegisterDecoraters';
import { FastifyInstance, FastifyRequest } from 'fastify';

class Routes {
    async handle(server: FastifyInstance, opts: FastifyRoutesOptions, next: () => void):
    Promise<void> {
      await new RegisterDecoraters(server).handle();

        server.get('/health', (req, res) => res.send({ message: 'Server Is working' }));

    next();
  }
}

export default Routes;