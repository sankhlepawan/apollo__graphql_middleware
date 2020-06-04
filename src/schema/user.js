import { gql } from "apollo-server-express"

export default gql`

    extend type Query {
        users: [User!]
        user(id: ID!): User
        getuserbyid(id: ID!): User
    }

    type User {
        name: String,
        id: Int!
}`;