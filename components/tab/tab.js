// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height : {
      type : String,
      value : ''
    },
    width : {
      type : String,
      value : ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuList: [
      {
        name: "快车"
      }, 
      {
        name: "顺风车"
      }, 
      {
        name: "外卖"
      }, 
      {
        name: "单车"
      }, 
      {
        name: "礼橙专车"
      }
    ],
    tabScroll: 0,
    currentTab: 0,
    windowHeight: '',
    windowWidth: ''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clickMenu: function(e) {
      var current = e.currentTarget.dataset.current //获取当前tab的index
      var tabWidth = this.data.windowWidth / 5 // 导航tab共5个，获取一个的宽度
      this.setData({
       tabScroll: (current - 2) * tabWidth //使点击的tab始终在居中位置
      }) 
      if (this.data.currentTab == current) {
       return false
      } else {
       this.setData({currentTab: current })
      }
    },
    changeContent: function(e) {
      var current = e.detail.current // 获取当前内容所在index,文档有
      var tabWidth = this.data.windowWidth / 5 
      this.setData({
       currentTab: current,
       tabScroll: (current - 2) * tabWidth
      })
    }
  }
})
