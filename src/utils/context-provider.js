
import { default as filterHeaders }  from './filter-headers';



export default ({ req })  => {
    return {
            req,
            customHeaders: {
              headers: {
                ...filterHeaders(req.headers, ['authorization','Content-Type']),
               //  credentials: 'same-origin',
                //'Content-Type': 'application/json',
              },
            }
          }
}

