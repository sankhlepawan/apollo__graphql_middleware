import { gql } from "apollo-server-express";

export default gql`
  input Filter {
    slug: String
    storeId: Int
    first: Int
    idType: String
  }

  input AddToCartInput {
    productId: Int
    clientMutationId: String
  }
`;
