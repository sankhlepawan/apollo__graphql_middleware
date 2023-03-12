import { gql } from "apollo-server-express";

export default gql`
  type Category {
    name: String
    id: Int!
    image: Image
    storeId: Int!
    createdAt: String
    slug: String
    description: String
    products(filter: Filter): [Product]
  }

  type Image {
    id: Int!
    sourceUrl: String
    srcSet: String
    createdAt: String
    altText: String
    uri: String
    title: String
  }

  type Product {
    id: Int!
    name: String
    createdAt: String
    updatedAt: String
    image: Image
    storeId: Int!
    slug: String
    description: String
    averageRating: Int
    regularPrice: Float
    price: Float
    databaseId: Int
    categoryId: Int
    onSale: Boolean
    reviewCount: Int
    type: String
  }

  extend type Product {
    variationId: String
    attributes: [Attribute]
    salePrice: Float
    galleryImages: [Image]
  }

  type User {
    name: String
    id: Int!
  }

  type Cart {
    id: Int!
    cartId: String
    createdAt: String
    updatedAt: String
    cartItem: [CatyItem]
  }

  type CatyItem {
    key: String!
    product: Product
    quantity: Int
    total: Float
    subtotal: Float
    subtotalTax: Float
    variation: Product
  }

  type Attribute {
    id: Int!
    name: String
    value: String
    attributeId: Int
  }
`;
