// pages/addComment/addComment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCompareShow:true,
    isItemShow:false,
    itemScore:20,
    total:0,
    result:[],
    itemMsg: {
      /*items: ['item1', 'item2', 'item3'],
      companys: [
        {
          company: 'A',
          scores: [5, 8, 10],
        },
        {
          company: 'B',
          scores: [6, 8, 12],
        },
        {
          company: 'C',
          scores: [5, 8, 10],
        },
      ],
      itemScores:[10,15,20]*/
      items: [],
      companys: [
        
      ],
      itemScores:[]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 自定义事件
   */
  addInput:function(){
    this.data.itemMsg.companys.push({
      company:'D',
      scores:[]
    })
    this.setData({
      itemMsg:this.data.itemMsg
    })
  },
  blurInput:function(e){
    var index = e.currentTarget.dataset.index
    this.data.itemMsg.companys[index].company = e.detail.value
    this.setData({
      itemMsg: this.data.itemMsg
    })
  },
  switchCompare:function(){
    this.setData({
      isCompareShow: false,
      isItemShow: true,
    })
  },
  scoreInput:function(e){
    this.setData({
      itemScore: e.detail.value      
    })
  },
  checkInput:function(e){
    var v = parseInt(e.detail.value)
    if (v >= this.data.itemScore && v<1){
      alert('输入的数字不能大于 S,或不能小于1')
    }
    console.log(this.data.itemScore)
  },
  formSubmit:function(e){
   
    var obj = e.detail.value
    console.log('form发生了submit事件，携带数据为：', obj)
    this.data.itemMsg.items.push(obj.item)
    this.data.itemMsg.itemScores.push(obj.score)
    delete obj.item;
    delete obj.score;
    for (let key in obj){
      let i = key.slice(-1)
      this.data.itemMsg.companys[i].scores.push(obj[key])
    }
    this.setData({
      itemMsg: this.data.itemMsg
    })
  },
  calc:function(){
    this.data.itemMsg.items.push("all")
    this.data.itemMsg.itemScores.push(sum(this.data.itemMsg.itemScores))
    let temp = []
    this.data.itemMsg.companys.forEach(function(value,index){
      var sumScore = sum(value.scores);
      value.scores.push(sumScore)
    })
    this.setData({
      itemMsg: this.data.itemMsg
    })
  },
})
function sum(arr) {
  var s = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    s += (+arr[i]);
  }
  return s;
}