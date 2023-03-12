import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    addToCart(input: AddToCartInput): Cart
  }
`;
