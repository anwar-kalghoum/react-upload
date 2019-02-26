import { config, v2 } from 'cloudinary';

const unlinkFile = async (filename) => {
    var fs = require('fs');
    await fs.unlinkSync(filename);
  };
  
export const Upload = async (file) =>
{
  config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
await v2.uploader.upload(file.path, 
    await  function(error, result) {console.log(result); 

if (result) {
console.log("file added");
unlinkFile(file.path);
} else {
reject(new Error('Error when photo insert'))
}

});
}