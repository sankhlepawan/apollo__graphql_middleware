
import { default as filterHeaders }  from './filter-headers';

export default ({ req })  => {
    return {
            req,
            customHeaders: {
              headers: {
                ...filterHeaders(req.headers, ['authorization']),
                credentials: 'same-origin',
                'Content-Type': 'application/json',
              },
            }
          }
}

