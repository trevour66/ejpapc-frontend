<template>
    <div>
        <Main_Nav v-if="getNavType == 'main' "/>
        <Admin_Nav v-if="getNavType == 'admin' "/>
    </div>
</template>

<script>
import Admin_Nav from "@/components/header/Admin_Nav.vue";
import Main_Nav from "@/components/header/Main_Nav.vue";
import { mapGetters } from "vuex";

export default {
    name: 'HeaderComponent',
    components: {
        Admin_Nav,
        Main_Nav
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