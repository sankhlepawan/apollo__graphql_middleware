// import CryptoJS from 'crypto-js';
import { config } from "../config";


const decodeTextBody = async (encrytedtring) =>  {
    /*let bytes  = CryptoJS.AES.decrypt(encrytedtring, config.encryptionKey);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData; */
    return encrytedtring;
}

const graphqlDecoder = async (req, res, next) => {
    try {
      if (req.get("content-transfer-encoding") === "base64") {
        const str = await decodeTextBody(req.body); // decoding
        req.body = str;
        req.headers["content-type"] = "application/json";
        req.graphqlWasEncoded = true;
      }
      next();
    } catch (e) {
      next(e);
    }
  }

export default graphqlDecoder;