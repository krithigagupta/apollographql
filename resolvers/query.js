module.exports = {
   Query: {
      listings: async (parent, args, { dataSources }, info) => {
       return await dataSources.propertiesAPI.getListings();
    },
    listingsById: async (parent, args, { dataSources }, info) => {
      return await dataSources.propertiesAPI.getListingsById();
   }    
  }
};
  