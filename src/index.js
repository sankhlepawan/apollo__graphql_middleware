import  { ApolloServer, makeExecutableSchema } from 'apollo-server';

import { Datasource } from './datasource';
import { contextProvider } from './utils';
import typeDefs from './schema';
import resolvers from "./resolvers";


const server = new ApolloServer(
    {
        dataSources: Datasource,
        context: contextProvider,
        schema: makeExecutableSchema({
            typeDefs,
            resolvers
        }),
     }
);


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

 