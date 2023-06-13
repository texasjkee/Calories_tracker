export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      BOT_TOKEN: string;
      GOOGLE_EMAIL: string;
      GOOGLE_KEY: string;
      GOOGLE_ID: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}