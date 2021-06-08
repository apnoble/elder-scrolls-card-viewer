<template>
    <router-link class="link-item" to="/" exact>
        <div :style="customStyle">            
            <i class="fa fa-arrow-circle-o-left" aria-hidden="true"><span> Back Home</span></i>
        </div>
    </router-link>
</template>

<script>

import router from "../router/index.js";

export default {
    props:{
        customStyle:{
            type: String,
            required: false
        }
    },
    data() {
        return {

        }
    },
    methods:{
        backHome: function(){
            router.push({path:'/'});
        }
    }
}
</script>
<style lang="css" scoped>
    .link-item{
       display: flex;
       align-items: center;
       justify-content: flex-start;
       margin: 0;
       padding:0;
       font-size:1rem;
       text-transform: uppercase;
   }

   .link-item div {
       display:flex;
       align-items: center;
       padding:1rem 2.5rem;
       border: 1px solid var(--primaryColor);
   }

   .link-item span{
        font-family: "Gentium Book Basic", serif !important;
   }

   .link-item a{
       text-decoration: none;
   }
</style>