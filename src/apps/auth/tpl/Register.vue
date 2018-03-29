<template>
  <div class="login">
    <t-header></t-header>
    <t-footer></t-footer>
  </div>
</template>

<script>
//  import { mapState, mapGetters, mapActions } from 'vuex'
  import tFooter from './Footer.vue'
  import tHeader from './Header.vue'

  export default {
    components: {
      tFooter,
      tHeader
    }
  }
</script>
