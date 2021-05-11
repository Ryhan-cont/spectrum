<template>
  <div class="layout--main">
    <v-app>
    <layout-body>
      <layout-header />
      <div style="flex:auto; padding:15px">
          <router-view></router-view>
      </div>
      <layout-footer />
    </layout-body>
    </v-app>
  </div>
</template>

<script>
import body from './Body';
import header from './Header';
import footer from './Footer';

export default {
  components:{
    'layout-body':body,
    'layout-header':header,
    'layout-footer':footer,
  },
  data(){
    return{
      headerHeight:100,
    }
  },
  created(){

  },
  mounted(){
    this.changeRouteTitle(this.$route.meta.pageTitle);
  },
  methods:{
    changeRouteTitle(title) {
        document.title = title || 'Spectrum';
    },
  },
  watch: {
    $route () {
      this.changeRouteTitle(this.$route.meta.pageTitle);
    },
  }
}
</script>
