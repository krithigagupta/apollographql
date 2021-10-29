module.exports = {
      listings: async (parent, args, { dataSources, user }, info) => {

         if (!user) {
            return null;
          }
       return await dataSources.propertiesAPI.getListings();
    },
    listingsById: async (parent, {city}, { dataSources, user }, info) => {
      if (!user) {
         return null;
       }
      return await dataSources.propertiesAPI.getListingsById(city);
  }
};
  