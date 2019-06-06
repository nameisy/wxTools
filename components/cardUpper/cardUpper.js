// components/cardUpper/cardUpper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModalStatus : {
      type : Boolean,
      value : false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    years : ["12","23"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showBuyModal() {
      // 显示遮罩层
      var animation = wx.createAnimation({
          duration: 200,
          /**
            * http://cubic-bezier.com/ 
            * linear 动画一直较为均匀
            * ease 从匀速到加速在到匀速
            * ease-in 缓慢到匀速
            * ease-in-out 从缓慢到匀速再到缓慢
            * 
            * http://www.tuicool.com/articles/neqMVr
            * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
            * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
            */
          timingFunction: "ease",
          delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
          animationData: animation.export(), // export 方法每次调用后会清掉之前的动画操作。
          showModalStatus: true
      })
      setTimeout(() => {
          animation.translateY(0).step()
          this.setData({
              animationData: animation.export()  // export 方法每次调用后会清掉之前的动画操作。
          })
      }, 200)
    },
    hideBuyModal() {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
          duration: 200,
          timingFunction: "ease",
          delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
          animationData: animation.export(),
      })
      setTimeout(function () {
          animation.translateY(0).step()
          this.setData({
              animationData: animation.export(),
              showModalStatus: false
          })
      }.bind(this), 200)

      this.triggerEvent('myevent', this.properties )
    }
  }
})
