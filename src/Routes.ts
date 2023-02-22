import RegisterDecoraters from '@handlers/RegisterDecoraters';
import { FastifyInstance, FastifyRequest } from 'fastify';

/* testing i18n plugin */

class Routes {
    async handle(server: FastifyInstance, opts: FastifyRoutesOptions, next: () => void):
    Promise<void> {
      await new RegisterDecoraters(server).handle();

        server.get('/health', (req, res) => res.send({ message: req.i18n.t('health') }));

        server.get('/i18n', (req, res,) => res.send({ message: req.i18n.t('text') }))

    next();
  }
}

export default Routes;