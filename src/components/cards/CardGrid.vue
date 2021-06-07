<template>
   <div id="cardGrid" >

       <div>Card grid works!</div>
       <card></card>
   </div>
</template>
<script>

export default {
    components: {
        Card: () => import('./Card.vue')
    },
}
</script>
<style lang="css" scoped>
    #cardGrid{
        width:100%
    }
</style>