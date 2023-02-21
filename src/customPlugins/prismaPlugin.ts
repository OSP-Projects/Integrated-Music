import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prismaPlugin: FastifyPluginAsync = fp(async (server) => {
  const prisma = new PrismaClient();

  await prisma.$connect();

  server.log.info('Prisma connected');

  server.decorate('prisma', prisma);

  server.addHook('onClose', async (srv) => {
    await srv.prisma.$disconnect();
  });
});

export default prismaPlugin;