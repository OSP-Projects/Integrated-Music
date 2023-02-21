type FastifyEnvScehemaPropsTypes = 'string' | 'number' | 'boolean'; 

interface FastifyEnvScehemaProps {
    PORT:           { type: FastifyEnvScehemaProps; default?: number };
    HOST:           { type: FastifyEnvScehemaProps; default?: string };
    JWT_SECRECT:    { type: FastifyEnvScehemaProps; default?: string };
    SPOTIFY_KEY:    { type: FastifyEnvScehemaProps; default?: string };
    YT_KEY:         { type: FastifyEnvScehemaProps; default?: string };
    DEEZER_KEY:     { type: FastifyEnvScehemaProps; default?: string };
    SOUNDCLOUD_KEY: { type: FastifyEnvScehemaProps; default?: string };
    MAIL_HOST:      { type: FastifyEnvScehemaProps; default?: string };
    MAIL_PORT:      { type: FastifyEnvScehemaProps; default?: number };
    MAIL_USER:      { type: FastifyEnvScehemaProps; default?: string };
    MAIL_PASS:      { type: FastifyEnvScehemaProps; default?: string };
    MAIL_NOREPLY:   { type: FastifyEnvScehemaProps; default?: string };   
};

interface FastifyEnvSchema {
    type: string;
    required: string[];
    properties: FastifyEnvSchemaProps;
    additionalProperties: boolean;
};