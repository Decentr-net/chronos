let logLevel = 'error';
let serverUrl = 'http://hera.testnet.decentr.xyz:26657';

const PROXY_CONFIG = [
  {
    context: function (url) {
      return url.toLowerCase().startsWith('/api');
    },
    pathRewrite: function () {
      return '';
    },
    logLevel: logLevel,
    target: serverUrl,
    changeOrigin: true,
    secure: true,
  },
];
module.exports = PROXY_CONFIG;
