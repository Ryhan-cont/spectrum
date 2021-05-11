<template>
    <div class="layout--main-header" :style="{height:$store.state.headerHeight+'px'}">
        <div class="text-h5 font-weight-black pt-1">Spectrum</div>
        <div class="flex-grow-1 d-flex pl-6" style="cursor:pointer">
            <div v-for="(item, index) in menu" :key="index" class="mr-2" @click="$router.push(item.url)">
                <div class="text-overline">{{item.title}}</div>
                <div :style="{height:'2px', backgroundColor: $route.name == item.name ? '#703acf' : '#d1d1d1'}"></div>
            </div>
        </div>
        <div class="d-flex pt-1">
            <div>
                <v-btn class="mr-1" color="indigo" outlined small>Sign up</v-btn>
            </div>
            <div>
                <v-btn color="indigo" outlined small>Login</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[],
    data(){
        return{
            menu:[
                {
                    title:'Home',
                    name:'Home',
                    icon:'home',
                    url:'/'
                },
                {
                    title:'About Us',
                    name:'AboutUs',
                    icon:'home',
                    url:'/about-us'
                },
                {
                    title:'Contact Us',
                    name:'ContactUs',
                    icon:'contact',
                    url:'/contact-us'
                }
            ]
        }
    },
    mounted(){

    },
    methods:{

    },
    watch:{
    }

}
</script>