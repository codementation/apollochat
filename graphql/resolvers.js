const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();

        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    register: async (parent, args, context, info) => {
      let { username, email, password, confirmPassword } = args;
      try {
        // Validate input data

        // Verify username/email


          // Hash password
          password = await bcrypt.hash(password, 6)

        // Create user
        const user = await User.create({
          username,
          email,
          password,
        });
        // Return user
        return user;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};
