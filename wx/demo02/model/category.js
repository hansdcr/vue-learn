const { Http } = require("../utils/http");

class Category {
  static async getHoneLocationC(){
    return await Http.request({
      url: `v1/category/all`
    })
  }
}

export {
    Category
}