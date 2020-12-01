// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'mbti',
        // URL to the GraphQL API
        url: 'http://localhost:5000',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }