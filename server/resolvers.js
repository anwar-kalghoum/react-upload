
import {Upload} from './Upload'


export default {
  Query: {
    hello: () => "hi"
  },
  Mutation: {
    uploadFile: (parent, { file }) => {
      console.log(file);
      Upload(file)
      return true;
    }
  }
};
