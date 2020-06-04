// import CryptoJS from 'crypto-js';
import { config } from '../config';

const encodeTextBody = (text) =>{
  return text;
 //  return CryptoJS.AES.encrypt(JSON.stringify(text), config.encryptionKey).toString();
}

const resonseEncoder = {
  requestDidStart() {
    return {
      willSendResponse(requestContext) {
        const isGraphqlWasEncoded = requestContext.context.req.graphqlWasEncoded;
        if(isGraphqlWasEncoded) {
          requestContext.response.data = encodeTextBody(requestContext.response.data);
          // requestContext.response.http.headers.set('content-transfer-encoding', 'base64');
        }
      }
    };
  },
};

export default resonseEncoder;


// const  resonseEncoder = (response, context) => {
//   const isGraphqlWasEncoded = context.context.req.graphqlWasEncoded;
//   response.data =  isGraphqlWasEncoded ? encodeTextBody(response.data) : response.data;
//   return response;
// }