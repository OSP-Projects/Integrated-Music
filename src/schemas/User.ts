import { FastifySchema } from 'fastify';

const UserCreateAccount: FastifySchema = {
    description: 'Create a new account',
    summary: 'Create a new account',
    operationId: 'Create account',
    security: [],
    body: {
        type: 'object',
        properties: {
          email: { type: 'string' },
          username: { type: 'string' },
          password: { type: 'string' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          number: { type: 'number' },
        },
    },
      response: {
    201: {
      description: 'Utilizador criado com sucesso',
      type: 'object',
      properties: {
        token: { type: 'string' },
        message: { type: 'string' },
      },
    },
    400: {
      description: 'Dados do request para criar a conta inválidos',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Erro interno do servidor',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    429: {
      description: 'Muitas tentativas de criar conta',
      type: 'object',
      properties: {
        code: { type: 'number' },
        error: { type: 'string' },
        message: { type: 'string' },
        date: { type: 'string' },
        expiresIn: { type: 'string' },
      },
    },
    403: {
      description: 'Foste banido temporariamente da api',
      type: 'object',
      properties: {
        code: { type: 'number' },
        error: { type: 'string' },
        message: { type: 'string' },
        date: { type: 'string' },
        expiresIn: { type: 'string' },
      },
    },
  },
};

export { UserCreateAccount }