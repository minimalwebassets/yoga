import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({ cloud_name: 'minimalwebassets', secure: true });
export default cloudinary;
