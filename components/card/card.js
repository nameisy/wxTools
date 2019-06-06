// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailData : {
      type: Object,
      value : "信息"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getStatus(num){
      var status = '';
      switch(num){
        case 0 : status = "待维修" ; break;
        case 1 : status = "正在处理" ; break;
        case 2 : status = "已处理" ; break;
      } 
      this.setData({
          status : status
      })
    }
  }
})
