// {
//   "/api": {
//     "target": {
//       "host": "zeus.testnet.decentr.xyz",
//       "protocol": "https:"
//     },
//     "secure": false,
//     "changeOrigin": true,
//     "logLevel": "info"
//   }
// }
let serverUrl = 'https://zeus.testnet.decentr.xyz';
let logLevel = 'debug';

const PROXY_CONFIG = [
  {
    context: function (url) {
      url = url.toLowerCase();
      return url.startsWith('/api');
    },
    target: serverUrl,
    logLevel: logLevel,
    secure: serverUrl.startsWith(serverUrl),
    changeOrigin: true
  }
  // {
  //   context: function (url) {
  //     return url === '/';
  //   },
  //   target: localDevTargetUrl
  // }
  // {
  //   context: [
  //     "/url1",
  //     "/url2"
  //   ],
  //   target: "<url_to_dev_server>",
  //   secure: true,
  //   logLevel: logLevel,
  //   changeOrigin: true
  // }
];
module.exports = PROXY_CONFIG;
