// components/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder : {
      type: String,
      value : "请输入"
    },
    title : {
      type: String,
      value : "填写姓名"
    },
    height : {
      type: Number,
      value : 108
    },
    font : {
      type: Number,
      value : 32
    },
    width : {
      type: Number,
      value : 210
    },
    textIndex : {
      type: Number,
      value : 30
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lineHeight : 0,
    value : ''
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      var that = this;
      this.setData({
        lineHeight : that.properties.height
      })
      console.log(this.data.lineHeight)
    },
    moved: function () { },
    detached: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onInput(e){
      this.setData({
        value : e.detail.value
      })
      this.triggerEvent('myevent', this.data)
    }
  }
})
