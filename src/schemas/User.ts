import { FastifySchema } from "fastify";

const UserCreateAccount: FastifySchema = {
  description: 'Create a new account',
  summary: 'Create a new account',
  operationId: 'Createaccount',
  tags: ['Users'],
  security: [],
  body: {
    type: 'object',
    properties: {
      email:      { type: 'string' },
      username:   { type: 'string' },
      password:   { type: 'string' },
      firstName:  { type: 'string' },
      role:       { type: 'string' },
    },
  },
  response: {
    201: {
      description: 'User created successfully',
      type: 'object',
      properties: {
        token:    { type: 'string' },
        message:  { type: 'string' },
      },
    },
    400: {
      description: 'Error creating account',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
  429: {
    description: 'Too many tries, wait a moment',
    type: 'object',
    properties: {
      code:       { type: 'number' },
      error:      { type: 'string' },
      message:    { type: 'string' },
      date:       { type: 'string' },
      expiresIn:  { type: 'string' },
    },
  },
  403: {
    description: 'Access temporarily denied',
    type: 'object',
    properties: {
      code:       { type: 'number' },
      error:      { type: 'string' },
      message:    { type: 'string' },
      data:       { type: 'string' },
      expiresIn:  { type: 'string' },
      },
    },
  },
};

const UserLoginAccount: FastifySchema = {
  description: 'Login in account',
  summary: 'Login in account',
  operationId: 'Loginaccount',
  tags: ['Users'],
  security: [],
  body: {
    type: 'object',
    properties: {
      email:      { type: 'string' },
      username:   { type: 'string' },
      password:   { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Success when logging in',
      type: 'object',
      properties: {
        token:    { type: 'string' },
        message:  { type: 'string' },
      },
    },
    400: {
      description: 'Error login account',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    401: {
      description: 'Invalid credentials',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
  429: {
    description: 'Too many tries, wait a moment',
    type: 'object',
    properties: {
      code:       { type: 'number' },
      error:      { type: 'string' },
      message:    { type: 'string' },
      date:       { type: 'string' },
      expiresIn:  { type: 'string' },
    },
  },
  403: {
    description: 'Access temporarily denied',
    type: 'object',
    properties: {
      code:       { type: 'number' },
      error:      { type: 'string' },
      message:    { type: 'string' },
      data:       { type: 'string' },
      expiresIn:  { type: 'string' },
      },
    },
  },
};

const UserVerifyAccountCode: FastifySchema = {
  description: 'Check account.',
  summary: 'Check account.',
  operationId: 'Verifyaccount',
  tags: ['Users'],
  response: {
    200: {
      description: 'Success to send verification code to email.',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    400: {
      description: 'Error to send verification code to email.',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    401: {
      description: 'Invalid credentials',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    429: {
      description: 'Too many tries, wait a moment',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        date:       { type: 'string' },
        expiresIn:  { type: 'string' },
    },
  },
    403: {
      description: 'Access temporarily denied',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        data:       { type: 'string' },
        expiresIn:  { type: 'string' },
      },
    },
  },
};

const UserVerifyAccount: FastifySchema = {
  description: 'Check account.',
  summary: 'Check account.',
  operationId: 'Verifyaccount',
  tags: ['Users'],
  response: {
    200: {
      description: 'Success to verify account',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    400: {
      description: 'Error to verification account',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    401: {
      description: 'Invalid credentials',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    429: {
      description: 'Too many tries, wait a moment',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        date:       { type: 'string' },
        expiresIn:  { type: 'string' },
    },
  },
    403: {
      description: 'Access temporarily denied',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        data:       { type: 'string' },
        expiresIn:  { type: 'string' },
      },
    },
  },
};

const GetUserInfo: FastifySchema = {
  description: 'Get user information.',
  summary: 'Get user information.',
  operationId: 'Getuserinfo',
  tags: ['Users'],
  response: {
    200: {
      description: 'get user information obtained successfully.',
      type: 'object',
      properties: {
        message:  { type: 'string' },
          user: {
            type: 'object',
            properties: {
              id:         { type: 'string' },
              firstName:  { type: 'string' },
              email:      { type: 'string' },
              userName:   { type: 'string' },
              isVerified: { type: 'boolean'},
          },
        },
      },
    },
    406: {
      description: 'Account not yet verified',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    400: {
      description: 'Error to verification account',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    401: {
      description: 'Invalid credentials',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    429: {
      description: 'Too many tries, wait a moment',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        date:       { type: 'string' },
        expiresIn:  { type: 'string' },
    },
  },
    403: {
      description: 'Access temporarily denied',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        data:       { type: 'string' },
        expiresIn:  { type: 'string' },
      },
    },
  },
};

const UserLogoutAccount: FastifySchema = {
  description: 'Sign out',
  summary: 'Sign out',
  operationId: 'Logoutsession',
  tags: ['Users'],
  response: {
    200: {
      description: 'Success closing session',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    400: {
      description: 'Error closing session',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    401: {
      description: 'Invalid credentials',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
    429: {
      description: 'Too many tries, wait a moment',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        date:       { type: 'string' },
        expiresIn:  { type: 'string' },
    },
  },
    403: {
      description: 'Access temporarily denied',
      type: 'object',
      properties: {
        code:       { type: 'number' },
        error:      { type: 'string' },
        message:    { type: 'string' },
        data:       { type: 'string' },
        expiresIn:  { type: 'string' },
      },
    },
  },
};

const UserUpdateAccount: FastifySchema = {
  description: 'Updates information',
  summary: 'Updates information',
  operationId: 'Updateaccount',
  tags: ['Users'],
  security: [],
  body: {
    type: 'object',
    properties: {
      email:      { type: 'string' },
      password:   { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Success in updating information',
      type: 'object',
      properties: {
        token:    { type: 'string' },
        message:  { type: 'string' },
      },
    },
    400: {
      description: 'Error in updating information',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    401: {
      description: 'Invalid credentials',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      description: 'Internal server error',
      type: 'object',
      properties: {
        message:  { type: 'string' },
      },
    },
  429: {
    description: 'Too many tries, wait a moment',
    type: 'object',
    properties: {
      code:       { type: 'number' },
      error:      { type: 'string' },
      message:    { type: 'string' },
      date:       { type: 'string' },
      expiresIn:  { type: 'string' },
    },
  },
  403: {
    description: 'Access temporarily denied',
    type: 'object',
    properties: {
      code:       { type: 'number' },
      error:      { type: 'string' },
      message:    { type: 'string' },
      data:       { type: 'string' },
      expiresIn:  { type: 'string' },
      },
    },
  },
};

export { UserCreateAccount, UserLoginAccount, UserLogoutAccount, UserVerifyAccount, UserVerifyAccountCode, UserUpdateAccount }