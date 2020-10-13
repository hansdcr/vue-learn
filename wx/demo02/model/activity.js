const { Http } = require("../utils/http");

class Activity {
  static localtionD = 'a-2'
  static async getHomeLocationD(){
    return await Http.request({
      url:`v1/activity/name/${Activity.localtionD}`
    })
  }
}

export {
  Activity
}