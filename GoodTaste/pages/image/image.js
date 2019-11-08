// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },

  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        const path = res.tempFilePaths[0];
        this.setData({
          imagePath: path
        })
      },
    })
  },

  handleLoad() {
    console.log("图片加载完成")
  }
})