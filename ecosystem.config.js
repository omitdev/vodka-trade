module.exports = {
  apps: [
    {
      name: "vodkatrade",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
