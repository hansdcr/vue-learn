import {Http} from './http'

class Paging {
  start
  count
  url
  req
  locker = false
  moreData = true
  accumulator = []

  constructor(req, count=10, start=0) {
    this.start = start
    this.count = count
    this.req = req
    this.url = req.url
  }

  // 我需要下一页的数据，你能给我吗？
  async getMoreData() {
    if (!this.moreData){
      return
    }

    if(!this._getLocker){
      return
    }
    const data = await this._actualGetData()
    this._release_locker()
    return data
  }

  async _actualGetData(){
    const req = this._getCurrentReq()
    const paging = await Http.request(req)
    if(!paging){
      return null
    }
    /** 
     * empty: 返回数据是否为空
     * items： 数据内容
     * moreData: 是否还有更多数据
     * accumulator: 数据的累加
     */
    // 服务器返回数据为空
    if(paging.total === 0 ){
      return {
        empty: true,
        items: [],
        moreData: false,
        accumulator: []
      }
    }

    this.moreData = this._moreData(paging.total_page, paging.page)
    if(this.moreData){
      // 累加，如果还有更多数据则进行累加
      this.start += this.count
    }
    this._accumulate(paging.items)
    return {
      empty: false,
      items: paging.items,
      moreData: this.moreData,
      accumulator: this.accumulator
    }
  }

  /**
   *  对瀑布流数据进行累加。每一次向下滑动都会有新增数据，
   *  将这些新增数据累加起来。
   * @param { } items 
   */
  _accumulate(items){
    this.accumulator = this.accumulator.concat(items)
  }

  /**
   *  判断是否有更多的数据
   * @param {*} totalPage  总页码
   * @param {*} pageNum  当前的页码
   */
  _moreData(totalPage, pageNum) {
    return pageNum < totalPage - 1
  }

  _getCurrentReq(){
    let url = this.url
    const params=`start=${this.start}&count=${this.count}`
    if(url.includes('?')) {
      url += '&' + params
    } else {
      url += '?' + params
    }
    return {url: url}
  }

  _getLocker() {
    if (this.locker) {
      return false
    }

    this.locker = true
    return true
  }

  _release_locker() {
    this.locker = false
  }

}

export {
  Paging
}