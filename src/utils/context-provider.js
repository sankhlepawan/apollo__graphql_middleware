
import filterHeaders  from './filter-headers';

const contextProvider = ({ req })  => {
  
  return {
            req,
            customHeaders: {
              headers: {
                ...filterHeaders(req.headers, ['authorization', 'connection' ]),
                credentials: 'same-origin',
                'Content-Type': 'application/json',
              },
            }
          }
}

export default contextProvider;