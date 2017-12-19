module.exports = {
  apps: [
    {
      name: 'API',
      script: './src/server.js',
      env_production: {
        NODE_ENV: 'production'
      },
      watch: true
    },
    {
      name: 'WEB',
      script: 'npm',
      args: 'start',
      watch: true
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy: {
  //   production: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/production',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
  //   },
  //   dev: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/development',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
  //     env: {
  //       NODE_ENV: 'dev'
  //     }
  //   }
  // }
};
