<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  },
  created() {
      this.$store.dispatch('initStocks');
  }
}
</script>

<style lang="scss">
  // CoreUI Icons Set
  // @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Font Awesome Icons Set */
  // $fa-font-path: '~font-awesome/fonts/';
  // @import '~font-awesome/scss/font-awesome.scss';
  /* Import Bootstrap Vue Styles */
  // @import '~bootstrap-vue/dist/bootstrap-vue.css';
  @import '~bootstrap/dist/css/bootstrap.min.css';
  // @import 'assets/scss/style';
  @import 'assets/scss/_custom.scss';
</style>
