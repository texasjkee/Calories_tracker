export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      BOT_TOKEN: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}