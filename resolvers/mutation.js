const authUtils = require("../utils/auth");

module.exports = {
  signIn: async (parent, { credentials }, { dataSources }, info) => {
    const { email, password } = credentials;
    const userCredentials = { email: email.toLowerCase(), id:password };

    //check the datasource to see if it is an existing user and validate email and password. If not throw error.

    const token = authUtils.createToken(userCredentials);

    return {
      token,
      user:{
        id:userCredentials.id,
        email:userCredentials.email
      }
    };
  },
};
