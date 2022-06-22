const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      userName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth
    removeUser: User
  }
`;

module.exports = typeDefs;