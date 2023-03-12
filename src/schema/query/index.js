import User from "./user";
import Category from "./category";
import Product from "./product";
import { gql } from "apollo-server-express";

const Query = gql`
  type Query {
    _: Boolean
  }
`;

export default [Query, User, Category, Product];
