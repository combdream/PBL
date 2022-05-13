wx-Page({

    /**
     * 页面的初始数据
     */
    data: {
      //播图
      swiperList:["1.png","2.png","3.png","4.png"],
      animate: false,
      //图片插入
      
      //文字
          showNum: 2, // 可见列表条数
          list: [
              {
                  nickname: '名字小美，',
                  num: '100',
                  headimgurl: 'http://sucai.suoluomei.cn/sucai_zs/images/20210803164111-bg.png'
              },
              {
                  nickname: '名字222，',
                  num: '1000',
                  headimgurl: 'http://sucai.suoluomei.cn/sucai_zs/images/20210803164111-bg.png'
              },
              {
                  nickname: '名字哈哈哈，',
                  num: '10',
                  headimgurl: 'http://sucai.suoluomei.cn/sucai_zs/images/20210803164111-bg.png'
              },
              {
                  nickname: '名字小红，',
                  num: '10',
                  headimgurl: 'http://sucai.suoluomei.cn/sucai_zs/images/20210803164111-bg.png'
              },
              {
                  nickname: '名字倒霉蛋，',
                  num: '10',
                  headimgurl: 'http://sucai.suoluomei.cn/sucai_zs/images/20210803164111-bg.png'
              }
          ],
          height: '',
        //下拉框
        shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
        selectDatas: ['','大床房', '双床房', '家庭房','三床房'], //下拉列表的数据
        indexs: 0,//选择的下拉列 表下标,
    },
    // 点击下拉显示框
    selectTaps() {
      this.setData({
        shows: !this.data.shows,
      });
    },
     // 点击下拉列表
     optionTaps(e) {
      let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
      console.log(Indexs)
      this.setData({
        indexs: Indexs,
        shows: !this.data.shows
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
  //页面开始加载 就会触发
    onLoad: function (options) {
    //1 发生异步请求获取轮播图数据
        wx.request({
          url: 'url',
          success: (result) => {
            console.log(result);
      },
     })
     //文字获取数据
     this.setData({
      height: this.data.showNum * 70 + 'rpx'
  })
  setInterval(this.showMarquee, 2000)
  },
  showMarquee() {
  this.data.list.push(this.data.list[0])
  this.setData({
      animate: true,
      list: this.data.list
  })
  setTimeout(() => {
      this.data.list.shift()
      this.setData({
          list: this.data.list,
          animate: false
      })
  }, 1000)
    }
  })