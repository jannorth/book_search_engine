const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    book: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Book.find(params);
    },
  },
//   refactor mutation code
  Mutation: {
    createBook: async (parent, args) => {
      const book = await Book.create(args);
      return book;
    },
    // createVote: async (parent, { _id, userNum }) => {
    //   const vote = await Book.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${userNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
  },
};

module.exports = resolvers;
