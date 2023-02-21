import fp from 'fastify-plugin';
import * as Sentry from "@sentry/node"
import { FastifyPluginAsync } from 'fastify';
import { RewriteFrames } from "@sentry/integrations";

const sentryPlugin: FastifyPluginAsync = fp(async (server) => {

    Sentry.init({
        dsn: 'https://cc9f21efa3b64ed0b1eafe829947d723@o4504715128209408.ingest.sentry.io/4504715132338176',
        integrations: [
            new RewriteFrames({
              root: global.__rootdir__,
            }),
          ],
    });
});

export default sentryPlugin;