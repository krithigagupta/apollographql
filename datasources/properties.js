
const { ApolloError } = require('apollo-server-errors');
const BaseAPI = require('../datasources/baseapi.js');

class PropertiesAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = 'https://api.simplyrets.com/properties';
  }

  async getListings() {

    const data = await this.get('/');
    if(!data)
        throw new ApolloError("nothing returned");
    return data;
  }
  async getListingsById() {

    const data = await this.get('/',{q: 'Houston'});
    if(!data)
        throw new ApolloError("nothing returned");
    return data;
  }
}

module.exports = PropertiesAPI;