declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AWS_REGION: string;
      REACT_APP_IDENTITY_POOL: string;
      REACT_APP_LEX_USER_ID: string;
      REACT_APP_BOT_ALIAS: string;
      REACT_APP_BOT_NAME: string;
    }
  }
}

export {};
