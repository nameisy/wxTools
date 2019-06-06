//Component Object
Component({
  properties: {
    myProperty:{
      type:String,
      value:'',
      observer: function() {}
    },
  },
  data: {
    value : ''
  },
  methods: {
    onInput(e){
      this.setData({
        value : e.detail.value
      })
      this.triggerEvent('myInput', this.data)
    }
  },
  created: function() {

  },
  attached: function() {

  },
  ready: function() {

  },
  moved: function() {

  },
  detached: function() {

  },
});
  