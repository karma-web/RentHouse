<template>
  <div class="spinner" :class="[{ 'center':fix }, { 'dark':dark }, size]">
    <div class="spinner-blade" v-for="item in 12"></div>
  </div>
</template>
<script>
  import './Loading.less'
  export default {
    props: {
//      组件尺寸，内置large || small
      size: {
        type: String,
        default: 'large'
      },
//      是否居中显示 带参为true
      fix: {
        type: Boolean,
        default: false
      },
//      是否为暗色调 带参为true
      dark: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
