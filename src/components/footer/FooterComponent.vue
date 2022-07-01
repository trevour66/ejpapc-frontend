<template>
    <div>
        <MainFooter v-if="getNavType == 'main' "/>
        <AdminFooter v-if="getNavType == 'admin' "/>
    </div>
</template>

<script>
import AdminFooter from "@/components/footer/AdminFooter.vue";
import MainFooter from "@/components/footer/MainFooter.vue";
import { mapGetters } from "vuex";

export default {
    name: 'FooterComponent',
    components: {
        AdminFooter,
        MainFooter
    },
    data(){
        return{
            navbarType: 'main'
        }
    },
    computed:{
        ...mapGetters(['getNavType'])
    }

}
</script>

<style>

</style>