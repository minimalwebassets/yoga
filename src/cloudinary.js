import cloudinaryCore from 'cloudinary-core';

const cloudinary = new cloudinaryCore.Cloudinary({ cloud_name: 'mapbert' });

const url = (imageId, config = undefined) => cloudinary.url(
  `Coaching%20Neubauer/${imageId}`,
  {
    fetchFormat: 'auto',
    quality: 'auto',
    secure: 'true',
    ...config,
  },
);

export default url;
