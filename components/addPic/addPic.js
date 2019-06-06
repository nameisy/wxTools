// components/addPic/addPic.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgPic : '',
    images: [],
    uploadedImages: [],
    isShow : 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //选择图片
    chooseImage: function () {
      var that = this
      // 选择图片
      wx.chooseImage({
        count: 3, // 默认9
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var tempFilePaths = res.tempFilePaths;
          that.setData({
            images: that.data.images.concat(tempFilePaths)
          });
          if(that.data.images.length === 6){
            that.setData({
              isShow: 6
            });
          }
        }
      })
    },
    // 图片预览
    previewImage: function (e) {
      var current = e.target.dataset.src
      wx.previewImage({
        current: current,
        urls: this.data.images
      })
    },
    //删除
    delete: function (e) {
      var that = this
      var index = e.currentTarget.dataset.index; var images = that.data.images;
      images.splice(index, 1);
      that.setData({
        images: images
      });
      if(that.data.images.length  < 6){
        that.setData({
          isShow: 0
        });
      }
    },
  }
})
