const withPWA = require('next-pwa')
 
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public'
  },
  env: {
    "TOKEN": "b_s_token"
  }
})