<template>
<div>
    <Nav></Nav>
    <div class="emei"><img src="/static/images/back.png" @click="back" alt=""><span>新闻资讯</span></div>
    <div class="detail abcdef">
        <div class="d-name"><span>「新闻资讯」</span>{{news.title}}</div>
        <div class="d-time">发表于{{news.year}}年{{news.month}}月{{news.day}}日</div>
        <!--<img src="/static/images/newsDetail.png" alt="">-->
        <div v-html="news.content">
        </div>
        <div class="pages">
            <div @click="changenew(changeNews.prev_id)">上一篇：{{changeNews.prev_title}}</div>
            <div @click="changenew(changeNews.next_id)">下一篇：{{changeNews.next_title}}</div>
        </div>
    </div>
</div>
</template>

<script>
  import Nav from './Nav'
  export default {
    name: 'NewsDetail',
    components:{
      Nav
    },
    data:function(){
      return {
        newsid:'',
        news:'',
        changeNews:''
      }
    },
    mounted () {
      this.newsid = this.$route.query.id
      console.log(this.newsid)
      this.initNews()
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      changenew(id){
        this.newsid = id
        this.initNews()
      },
      initNews(id){
        var that =this
        that.$axios.post('/News/newsDetail',{
          id:that.newsid
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.news = res.data.data.news
            that.changeNews = res.data.data.prev_next
          }
        })
      }
    }
  }
</script>

<style scoped>
    .emei{
        width: 100%;
        line-height: 60px;
        padding: 0 115px 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #8f8f8f;
        color: white;
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .emei span{
        margin-left: 43px;
    }
    .emei img{
        width: 10px;
    }
.detail{
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #696969;
    line-height: 25px;
}

.detail::after{
    content: "";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
}
.detail>img{
    width: 100%;
}
    .d-name{
        text-align: center;
        margin: 65px 0 20px;
        font-size: 16px;
        color: #6c6c6c;
    }
    .d-name span{
        color: #252525;
    }
    .d-time{
        text-align: center;
        font-size: 14px;
        color: #999999;
        margin-bottom: 20px;
    }

    .pages{
        font-size: 14px;
        color: #999;
        float: right;
        margin: 50px 0 35px;
        line-height: 25px;
    }
    .pages>div{
        cursor: pointer;
    }
    @media screen and (max-width: 1500px){
        .detail{
            width: 80%;
        }
    }
</style>
<style>
    .detail.abcdef p{
        margin:40px 0 50px;
    }
    /*.detail.abcdef img{*/
        /*width: 100%;*/
    /*}*/
</style>
