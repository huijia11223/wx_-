// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messages: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        

        const messages=this.data.messages
        for (var i=0;i<8;i++){
            
            messages.push({
                pUser:"有家电器客服",
                date:"2009-10-10",
                image:'https://picsum.photos/100/100/?random',
                content:"你好，用户，根据你的需要，我们为您定制了一整套的方法xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            })
        }
        this.setData({messages})
    },
    // showPmessages:function(){
    //     this.setData({show:true})
    // },
    
    // showComment:function(){
    //     this.setData({show:false})
    // },
    // showAMe:function(){
    //     this.setData({show:false})
    // },
    // showNotifacation:function(){
    //     this.setData({show:false})
    // },
})