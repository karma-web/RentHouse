<template>
  <div class="search-house">
    <div class="house-detail" :class="{'flex-0':open}">
      <mu-drawer :open="!open" :docked="true" @close="toggle()">
        <Carousel class="carousel" v-model="value2" loop>
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
        </Carousel>
      </mu-drawer>
    </div>
    <div class="house-list" :class="{'house-list-padding':open}">
      <div class="list-content">
        <div class="list-item-header">
          <span>默认排序</span>
          <span>价格 <Icon type="ios-arrow-up"></Icon></span>
          <span>面积 <Icon type="ios-arrow-down"></Icon></span>
        </div>
        <div class="list-item">
          <div class="list-left">
            <div class="list-left-avatar">
              <img :src="img" alt="">
            </div>
            <div class="list-left-info">
              <p class="address">安德路 安德路55号院 主卧</p>
              <p class="subway"><Icon type="ios-location-outline"></Icon> 距地铁2号线鼓楼大街站700米</p>
              <p class="house-layout">18㎡ | 2楼 | 2室1卫 </p>
              <p class="house-feature"><span>离地铁近</span><span>独立阳台</span><span>2月15号入住</span></p>
            </div>
          </div>
          <div class="list-right" :class="{'flex-1':!open}">
            <p><span>￥3900</span><span>/月</span></p>
            <mu-raised-button @click="toggle" label="查看详情" class="demo-raised-button"/>
          </div>
        </div>
        <div class="list-item">
          <div class="list-left">
            <div class="list-left-avatar">
              <img :src="img" alt="">
            </div>
            <div class="list-left-info">
              <p class="address">安德路 安德路55号院 主卧</p>
              <p class="subway"><Icon type="ios-location-outline"></Icon> 距地铁2号线鼓楼大街站700米</p>
              <p class="house-layout">18㎡ | 2楼 | 2室1卫 </p>
              <p class="house-feature"><span>离地铁近</span><span>独立阳台</span><span>2月15号入住</span></p>
            </div>
          </div>
          <div class="list-right" :class="{'flex-1':!open}">
            <p><span>￥3900</span><span>/月</span></p>
            <mu-raised-button @click="toggle" label="查看详情" class="demo-raised-button"/>
          </div>
        </div>
        <div class="list-item">
          <div class="list-left">
            <div class="list-left-avatar">
              <img :src="img" alt="">
            </div>
            <div class="list-left-info">
              <p class="address">安德路 安德路55号院 主卧</p>
              <p class="subway"><Icon type="ios-location-outline"></Icon> 距地铁2号线鼓楼大街站700米</p>
              <p class="house-layout">18㎡ | 2楼 | 2室1卫 </p>
              <p class="house-feature"><span>离地铁近</span><span>独立阳台</span><span>2月15号入住</span></p>
            </div>
          </div>
          <div class="list-right" :class="{'flex-1':!open}">
            <p><span>￥3900</span><span>/月</span></p>
            <mu-raised-button @click="toggle" label="查看详情" class="demo-raised-button"/>
          </div>
        </div>
        <div class="list-item">
          <div class="list-left">
            <div class="list-left-avatar">
              <img :src="img" alt="">
            </div>
            <div class="list-left-info">
              <p class="address">安德路 安德路55号院 主卧</p>
              <p class="subway"><Icon type="ios-location-outline"></Icon> 距地铁2号线鼓楼大街站700米</p>
              <p class="house-layout">18㎡ | 2楼 | 2室1卫 </p>
              <p class="house-feature"><span>离地铁近</span><span>独立阳台</span><span>2月15号入住</span></p>
            </div>
          </div>
          <div class="list-right" :class="{'flex-1':!open}">
            <p><span>￥3900</span><span>/月</span></p>
            <mu-raised-button @click="toggle" label="查看详情" class="demo-raised-button"/>
          </div>
        </div>
        <div class="list-item">
          <div class="list-left">
            <div class="list-left-avatar">
              <img :src="img" alt="">
            </div>
            <div class="list-left-info">
              <p class="address">安德路 安德路55号院 主卧</p>
              <p class="subway"><Icon type="ios-location-outline"></Icon> 距地铁2号线鼓楼大街站700米</p>
              <p class="house-layout">18㎡ | 2楼 | 2室1卫 </p>
              <p class="house-feature"><span>离地铁近</span><span>独立阳台</span><span>2月15号入住</span></p>
            </div>
          </div>
          <div class="list-right" :class="{'flex-1':!open}">
            <p><span>￥3900</span><span>/月</span></p>
            <mu-raised-button @click="toggle" label="查看详情" class="demo-raised-button"/>
          </div>
        </div>
        <div class="list-item">
          <div class="list-left">
            <div class="list-left-avatar">
              <img :src="img" alt="">
            </div>
            <div class="list-left-info">
              <p class="address">安德路 安德路55号院 主卧</p>
              <p class="subway"><Icon type="ios-location-outline"></Icon> 距地铁2号线鼓楼大街站700米</p>
              <p class="house-layout">18㎡ | 2楼 | 2室1卫 </p>
              <p class="house-feature"><span>离地铁近</span><span>独立阳台</span><span>2月15号入住</span></p>
            </div>
          </div>
          <div class="list-right" :class="{'flex-1':!open}">
            <p><span>￥3900</span><span>/月</span></p>
            <mu-raised-button @click="toggle" label="查看详情" class="demo-raised-button"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../style/search_house.css'
  export default {
    data () {
      return {
        open: true,
        value2: 0,
        img: 'data:image/jpeg;base64,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'
      }
    },
    mounted () {
    },
    methods: {
      toggle () {
        this.open = !this.open
      }
    }
  }
</script>
