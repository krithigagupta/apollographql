const { RESTDataSource } = require('apollo-datasource-rest');
class BaseAPI extends RESTDataSource {
    willSendRequest(request) {
        //hardcoding this - In production this would come from context.request.headers from front-end
      request.headers.set("Authorization", "Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz");
    }
  }

module.exports=  BaseAPI;