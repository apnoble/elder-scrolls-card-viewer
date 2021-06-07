<template>
    <div>
        <main class="container">
            <div>
                 <card-grid :cards="cardsCopy"></card-grid>
            </div>
        </main>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
export default {
    
    components: {
        CardGrid: () => import('../cards/CardGrid.vue')
    },
    
    props :{
        title: {
            type: String,
            required: false,
        },
    },

    data(){
        return {
            
        }
    },

    computed: {
        ...mapGetters([
            'cards', 
        ]),
        cardsCopy: function() {
            return this.cards ? [...this.cards["all"].cards] : [];
        },
    },
    methods: {
        ...mapActions(['getCards']),
    
        loadCards: async function(){
            await this.getCards("all");
        },
    },
  
    mounted(){ 
        this.loadCards();
    }
}
</script>
