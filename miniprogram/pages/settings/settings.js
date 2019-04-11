// pages/settings/settings.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pInforSetting: false, //个人资料设置
        mCouponSetting: false, //我的优惠券设置
        cProblemSetting: false, //常见问题设置
        uItemSetting: false, //使用条款设置
        ppSetting: false, //隐私权政策设置
        ccsSetting: false //联系客服设置
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        ['pInforSetting', 'mCouponSetting', 'cProblemSetting', 'uItemSetting', 'ppSetting', 'ccsSetting'].forEach(function (setting) {
            var value = wx.getStorageSync(setting);
            if(typeof value=='boolean'){
                var config={};
                config[setting]=value;
                that.setData(config);
            }
        });
    },
    toggleSetting: function (e) {
        var setting = e.currentTarget.dataset.setting;
        var value = e.detail.value;
        wx.setStorageSync(setting, value)
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
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})