declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        USERNAME: string;
        PASSWORD: string;
        URL: string;
        // add more environment variables and their types here
      }
    }
  }