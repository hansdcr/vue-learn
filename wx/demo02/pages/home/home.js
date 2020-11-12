// pages/home/home.js
import { config } from "../../config/config";
import { Theme } from "../../model/theme";
import { Banner } from "../../model/banner";
import { Category } from "../../model/category";
import { Activity } from "../../model/activity";
import { SpuPaging } from "../../model/spu-paging";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    themeE: null,
    themeF: null,
    themeH: null,
    themeESpuList: [],
    bannerB: null,
    bannerG: null,
    grid: [],
    activityD: null,
    paging: null,
    loadingType: 'loading'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initAllData()
    this.initBottomSpuList()
  },

  async initBottomSpuList() {
    const paging = await SpuPaging.getLatestPaging()
    this.data.spuPaging = paging
    const data = await paging.getMoreData()
    if(!data){
      return
    }
   
    wx.lin.renderWaterFlow(data.items)
  },

  async initAllData() {
    const themes = new Theme()
    await themes.getThemes()
    
    const themeA =  await themes.getHomeLocationA()
    const themeE =  await themes.getHomeLocationE()
    const themeF =  await themes.getHomeLocationF()
    const themeH =  await themes.getHomeLocationH()
    const themeESpuList = await Theme.getHomeLocationESpu()
    
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHoneLocationC()
    const activityD = await Activity.getHomeLocationD()
    const bannerG = await Banner.getHomeLocationG()

    this.setData({
      themeA,
      bannerB,
      activityD,
      themeE,
      themeF,
      themeH,
      bannerG,
      themeESpuList: themeESpuList['spu_list'], 
      grid: grid.roots,
      
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    const data = await this.data.spuPaging.getMoreData()
    if(!data){
      return
    }
    wx.lin.renderWaterFlow(data.items)
    if(!data.moreData){
      this.setData({
        loadingType: 'end'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})