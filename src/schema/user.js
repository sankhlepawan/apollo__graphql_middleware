import { gql } from "apollo-server"

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