import Fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyEnv from '@fastify/env';
import fastifyJwt from '@fastify/jwt';

import { optionsCors, optionsEnv, optionsJWT } from '@config/fastifyConfig';

/* Importing the plugins*/

import prismaPlugin from '@customPlugins/prismaPlugin';
import sentryPlugin from 'src/plugins/sentryPlugin';
import i18nPlugin from 'src/plugins/i18nPlugin';

import Routes from './Routes';

const fastify = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
  trustProxy: true,
  bodyLimit: 1024 * 1024 * 1, // 1MB limit for body
});

async function registerFastify(): Promise<FastifyInstance> {
  await fastify.register(fastifyEnv, optionsEnv);
  fastify.log.info('Env loaded');

  await fastify.register(prismaPlugin);
  fastify.log.info('Prisma registered');

  await fastify.register(sentryPlugin);
  fastify.log.info('Sentry.io registered')

  await fastify.register(i18nPlugin);
  fastify.log.info('I18n registered');

  await fastify.register(fastifyJwt, optionsJWT(fastify));
  fastify.log.info('JWT registered');

  await fastify.register(fastifyCors, optionsCors);
  fastify.log.info('CORS registered');

  await fastify.register(new Routes().handle, { prefix: '/api' } as FastifyRoutesOptions);
  fastify.log.info('Fastify Routes registered');

  return fastify;
}

export default registerFastify;