declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'test' | 'production';
        HOST: string;
        PORT: number;
        SPOTIFY_KEY: string;
        YT_KEY: string;
        DEEZER_KEY: string;
        SOUNDCLOUD_KEY: string;
        JWT_SECRET: string;
        MAIL_HOST: string;
        MAIL_PORT: number;
        MAIL_USER: string;
        MAIL_PASS: string;
        MAIL_NOREPLY: string;
      }
    }
  }
  
  export { };