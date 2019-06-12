const process = require('process');

const config = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  session: {
    httpOnly: true,
    key: 'koa:sess',
    maxAge: 12 * 60 * 60 * 1000,
    overwrite: true,
    signed: true,
  },
};

module.exports = config;
