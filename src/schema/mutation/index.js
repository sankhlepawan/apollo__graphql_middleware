import Cart from "./cart";
import { gql } from "apollo-server-express";

const Mutation = gql`
  type Mutation {
    _: Boolean
  }
`;
export default [Mutation, Cart];
