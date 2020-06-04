import  {makeExecutableSchema } from 'apollo-server-express';
import { Datasource } from '../datasource';
import { contextProvider } from '../utils';
import typeDefs from '../schema';
import resolvers from "../resolvers";
 // import { graphqlEncoder } from '../plugins';


export default {
    debug:true,
    dataSources: Datasource,
    context: contextProvider,
    schema: makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    uploads: false,
    // plugins: [graphqlEncoder]
}
