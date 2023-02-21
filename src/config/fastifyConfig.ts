import { FastifyInstance, FastifyRequest } from 'fastify';
import { FastifyCorsOptions } from '@fastify/cors';
import { FastifyEnvOptions } from '@fastify/env';
import { FastifyJWTOptions } from '@fastify/jwt';

const optionsCors: FastifyCorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-forwarded-for'],
    credentials: true,
    maxAge: 86400,
};

const envSchema: FastifyEnvSchema = {
    type: 'object',
    required: ['DATABASE_URL', 'JWT_SECRET','SPOTIFY_KEY', 'YT_KEY', 'DEEZER_KEY', 'SOUNDCLOUD_KEY', 'MAIL_HOST', 'MAIL_PORT', 'MAIL_USER', 'MAIL_PASS'],
    properties: {
      PORT:                 { type: 'number', default: 3333 },
      HOST:                 { type: 'string', default: '0.0.0.0' },
      JWT_SECRET:           { type: 'string' },
      SPOTIFY_KEY:          { type: 'string' },
      YT_KEY:               { type: 'string' },
      DEEZER_KEY:           { type: 'string' },
      SOUNDCLOUD_KEY:       { type: 'string' },
      MAIL_HOST:            { type: 'string' },
      MAIL_NOREPLY:         { type: 'string', default: 'noreply@integratedmusic.contatoosp@hotmail.com' },
      MAIL_PORT:            { type: 'number', default: 465 },
      MAIL_USER:            { type: 'string' },
      MAIL_PASS:            { type: 'string' },
    },
    additionalProperties: false,
};
  
  const optionsEnv: FastifyEnvOptions = {
    confKey: 'env',
    schema: envSchema,
    dotenv: true,
};

const optionsJWT = (server: FastifyInstance): FastifyJWTOptions => {
    const options: FastifyJWTOptions = {
      secret: server.env.JWT_SECRET,
    };
  
    return options;
};

export {
    optionsCors, optionsEnv, optionsJWT,
};