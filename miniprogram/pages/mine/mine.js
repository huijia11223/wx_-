// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar:"",
        name:"",
        pInforSetting:true,
        mCouponSetting:true,
        cProblemSetting:true,
        uItemSetting:true,
        ppSetting:true,
        ccsSetting:true,
        index:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            
        })

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
        this.setData({
            avatar: wx.getStorageSync("avatar") || "https://yunlaiwu0.cn-bj.ufileos.com/teacher_avatar.png",
            name: wx.getStorageSync("name") || "",
            pInforSetting:wx.getStorageSync("pInforSetting"),
            mCouponSetting:wx.getStorageSync("mCouponSetting"),
            cProblemSetting:wx.getStorageSync("cProblemSetting"),
            uItemSetting:wx.getStorageSync("uItemSetting"),
            ppSetting:wx.getStorageSync("ppSetting"),
            ccsSetting:wx.getStorageSync("ccsSetting")
        })
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
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
})