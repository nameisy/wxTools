// components/select/select.js
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
    isShowTowBar : true,
    title : "这是一个标题",
    listArr : [1,2,3,4]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showTowBar() {
      var that = this;
      this.setData({
        isShowTowBar : !that.data.isShowTowBar
      })
    }
  }
})
