//app.js
App({
  onLaunch: function () {
    
   var name=wx.getStorageSync("name");
   var avatar=wx.getStorageSync("avatar");

   if(!name || !avatar){
     wx.getUserInfo({
       success:function(res){
        // console.log(res.userInfo);
        var userInfo=res.userInfo;
        wx.setStorageSync('name',userInfo.nickName);
        wx.setStorageSync("avatar",userInfo.avatarUrl);

       },
       fail:function(res){
           console.log(res);
       }
     });
   }

  }
  
})
