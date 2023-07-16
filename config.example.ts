const config = {
  PORT: 3000,
  JWT_SECRET: "your-secret-key",
  JWT_ACCESS_EXPIRATION: "120s",
  JWT_REFRESH_EXPIRATION: "7d",
  MONGODB_URL: "mongodb://localhost:27017/test",
};

export default config;
