module.exports = ({env}) => ({
  'cloudinary-media-library': {
    enabled: true,
    config: {
      cloudName: env('CLOUDINARY_NAME'),
      apiKey: env('CLOUDINARY_KEY'),
      encryptionKey: env('CLOUDINARY_SECRET'),
    },
  },
});

// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//         secure: true,
//       },
     
//     },
//   },
//    'cloudinary-media-library': {
//     enabled: true,
//     config: {
//       cloudName: env('CLOUDINARY_NAME'),
//       apiKey: env('CLOUDINARY_KEY'),
//       encryptionKey: env('CLOUDINARY_SECRET')
//     },
//   },
// });



