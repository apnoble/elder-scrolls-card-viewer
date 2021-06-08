<template>
    <div>
        <main class="container">
            <div v-if="this.loading || this.loadingSearch" style="margin-top:12rem">
                <div class="loader">Loading...</div>
            </div>
            <div v-else>
                 <card-grid v-if="searchMode" :cards="searchCopy"></card-grid>
                 <card-grid v-else :cards="cardsCopy"></card-grid>
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
        searchMode: {
            type: Boolean,
            required: true
        },
        loadingSearch:{
            type: Boolean,
            required: false
        }
    },

    data(){
        return {
            loading: false
        }
    },

    computed: {
        ...mapGetters([
            'cards',
            'search' 
        ]),
        cardsCopy: function() {
            return this.cards ? [...this.cards["all"].cards] : [];
        },
        searchCopy: function() {
            return this.search ? [...Object.values(this.search.cards)] : [];
        },
    },
    methods: {
        ...mapActions(['getCards']),

        showLoading: function() {
            this.loading = true;
        },
        hideLoading: function() {
            this.loading = false;
        },
        loadCards: async function(){
            this.showLoading();
            await this.getCards("all");
            this.hideLoading();
        },
    },
  
    created() {
        this.showLoading();
    },
    mounted(){ 
        this.loadCards();
    }
}
</script>
