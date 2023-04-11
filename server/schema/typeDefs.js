const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Book {
    _id: ID!
    authors: String!
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    user: [User]
    books(_id: String): [Book]
  }

  type Mutation {
    # mutation code
    create
  }
`;

module.exports = typeDefs;
