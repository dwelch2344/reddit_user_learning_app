const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    username: String
    email: String
    createdAt: String
    bio: String
    active: Boolean
    avatar: String
    settings: Settings
    friends: Friends
  }

  type Friends {
    pending: [String]
    accepted: [String]
  }

  type Settings {
    _id: ID
    theme: String
    showActive: Boolean
    shareEmail: Boolean
  }

  type Message {
    text: String!
    senderId: ID!
  }

  type Conversation {
    participants: [ID]
  }

  type ActiveUsers {
    active: [User]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Subscription {
    messages: [Message]
    userActive: [User]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    settings: Settings
  }

  type Mutation {
    addUser(
      name: String!
      user: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth
    logout: User
    removeUser: User
    updateUser(bio: String, name: String): User
    sendFriendRequest(username: String!): String
    acceptFriendRequest(username: String!): String
    createMessage(text: String!, receiverId: ID!): Message
    createConvo: [ID]
  }
`;

module.exports = typeDefs;
