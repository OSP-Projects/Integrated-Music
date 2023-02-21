import { PrismaClient } from '@prisma/client';
import { preHandlerAsyncHookHandler } from 'fastify';

/* eslint-disable no-unused-vars */
declare module 'fastify' {
    interface FastifyInstance {
      prisma: PrismaClient;
      env: NodeJS.ProcessEnv;
    }
}