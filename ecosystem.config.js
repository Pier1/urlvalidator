module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'API',
      script: 'src/server.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        API_URL: "'localhost:3000'"
      },
      env_production: {
        NODE_ENV: 'production',
        API_URL: "'http://urlvalidator.pier1ux.com'"
      }
    }
  ]
};
