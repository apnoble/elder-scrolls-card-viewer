<template>
   <div id="cardGrid">
       <card class="card" v-for="(card, i) in cards" :key="card.id + i" :card="card"></card>
   </div>
</template>
<script>
export default {
    props:{
        cards: {
            type: Array,
            required: false,
        },
    },
    components: {
        Card: () => import('./Card.vue')
    },
}
</script>
<style lang="css" scoped>
    #cardGrid{
        width:100%
    }

    .card {
        display: inline-flex;
        font-weight: 400;
        padding: 1rem;
        width: 300px;
        margin: 0.5rem;
        border: 2px solid var(--primaryColor);
        border-radius: 8px;
        background-color: var(--primaryDark);
        color: var(--primaryColor);
        overflow: hidden;
        transition: transform 0.1s;
    }
</style>