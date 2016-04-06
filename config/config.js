var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'twitterapp'
    },
    port: 3000,
    db: 'sqlite://localhost/twitterapp-development',
    storage: rootPath + '/data/twitterapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'twitterapp'
    },
    port: 3000,
    db: 'sqlite://localhost/twitterapp-test',
    storage: rootPath + '/data/twitterapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'twitterapp'
    },
    port: 3000,
    db: 'sqlite://localhost/twitterapp-production',
    storage: rootPath + 'data/twitterapp-production'
  }
};

module.exports = config[env];
