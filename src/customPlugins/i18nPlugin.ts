import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import i18n from 'fastify-i18n';

import enUS from '../locales/en-US';
import ptBR from '../locales/pt-BR';


const i18nPlugin: FastifyPluginAsync = fp(async (server) => {
    server.register(i18n, {
        fallbackLocale: 'en-US',
        messages: {
            'en-US': enUS,
            'pt-BR': ptBR,
        }
    });
});

export default i18nPlugin;