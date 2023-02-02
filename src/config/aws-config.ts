import AWS from "aws-sdk";

export const awsConfig = {
  region: process.env.REACT_APP_AWS_REGION,
  identityPoolId: process.env.REACT_APP_IDENTITY_POOL,
  lexUserId: process.env.REACT_APP_LEX_USER_ID || "lex-chatbot-demo",
  botAlias: process.env.REACT_APP_BOT_ALIAS,
  botName: process.env.REACT_APP_BOT_NAME,
  by: {
    user: "user",
    lex: "lex",
  },
};

AWS.config.region = awsConfig.region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: awsConfig.identityPoolId || "",
});

export const lexRunTime = new AWS.LexRuntime();
export const lexUserId = awsConfig.lexUserId + Date.now();
