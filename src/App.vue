<template>
<div>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
</div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import { mapActions } from 'vuex'

export default {
    components: { 
      HeaderComponent,
      FooterComponent
    },
    methods: {
      ...mapActions(['changeNav']),
      trackRoute(to){
        to.matched.forEach((match)=>{
          if(match.path == '/admin'){
            this.changeNav('admin')          
          }else if(match.path == ''){
            this.changeNav('main')          
          }
        })
      }
    },
    watch:{
      $route(to, from){
        this.trackRoute(to)
      }
    },
    created(){
      let route = this.$route
      this.trackRoute(route)
    }
}
</script>

<style>
.bg-body {
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 251/var(--tw-bg-opacity));
}
body {
    font-family: DM Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
</style>
