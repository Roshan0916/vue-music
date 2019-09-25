<template>
  <div>
    <div  v-if="recommends.length" id="bull">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,id) in recommends" :key="id">
          <img :src="item.picUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div v-for="(item ,id) in radiolists" :key="id">
       <img :src="item.picUrl" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getRecommend } from 'api/recommend'
  import {ERR_OK} from 'api/config'


  export default {
    data(){
      return {
        recommends: [],
        radiolists: [],
        swiperOption: {
          loop: true,
          autoplay:true,
        pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if(res.code === ERR_OK){
            this.recommends = res.data.slider
            this.radiolists = res.data.radioList
            console.log(this.radiolists)
          }
        })
      }
    },
    components:{
      Slider
    }
  }
 
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .swiper-slide img
    position: relative
    width: 100%
    height:150px
    overflow: hidden
  #bull >>> .swiper-pagination-bullet-active
    background: #fff
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>