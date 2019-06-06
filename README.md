# 一. input输入框
### 使用指南
在app.json或相应的index.json中引入组件
```
  "usingComponents": {
    "demo-input": "path/to/vant-weapp/dist/checkbox/index"
  }
```
### 代码演示
```
  <demo-input bindchange="onChange"/> 
```
```
  Page({
    data: {
      value:''
    },

    onChange(event) {   
      this.setData({
        value: event.detail
      });
    }
  });
```
### input API
|参数|说明|类型|默认值|
|-|-|-|-|
|placeholder|提示语|string|请输入|
|title|标题|string|这是标题|
|height|input高度|number|108|
|width|标题的宽度|number|210|
|textIndex|标题首行缩进|number|30|
|font|字体大小|number|32|
### 样式
![input](./images/input.png)






