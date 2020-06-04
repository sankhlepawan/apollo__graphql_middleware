import  express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { appServerConfig, config  } from './config';
import { graphqlDecoder } from './utils';

const path = require('path');
const port = config.port;
const app = express();
const server = new ApolloServer(appServerConfig)


app.use((req, res, next) => {
    let allowed = ['GET','POST','PUT'];
    
    if(config.env == 'dev') {
        allowed.push('OPTIONS');
    }
    if (allowed.indexOf(req.method) !== -1) {
        next();
    } else {
      res.sendStatus(405);
    }
});

app.use(
    '/graphql',
    bodyParser.text(),
    graphqlDecoder
)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'dist' });
});

app.use(express.static(path.join('dist')));


server.applyMiddleware({app});

app.listen({port}, () => {
    console.log(`🚀  Server ready at http://localhost:${port}`);
});