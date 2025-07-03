module.exports = [
  'strapi::logger',
  'strapi::errors',
 {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          
        
          'connect-src': ["'self'", 'https:','https://proxy-event.ckeditor.com'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://console.cloudinary.com',
            'https://res.cloudinary.com',
          ],
          'script-src': [
            "'self'",
            'example.com',
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
            'https://console.cloudinary.com',
            'https://cdn.ckeditor.com'
          ],
          'media-src': ["'self'", 'data:', 'blob:', 'https://console.cloudinary.com'],
          'frame-src': [
            "'self'",
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
            'https://console.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // 'strapi::cors',
   {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
