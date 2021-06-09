<template>
    <div>
        <main class="container">
            <card-grid v-if="searchMode" :cards="searchCopy"></card-grid>
            <card-grid v-else :cards="cardsCopy"></card-grid>

            <div v-if="this.loading || this.loadingSearch" style="margin-top:2rem">
                <div class="loader">Loading...</div>
            </div>
        </main>
        <!-- loadMore is an element that the infinite scroll observes and anchors to -->
        <div :id="loadMoreID" :ref="loadMoreID" class="loadMore"></div>
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
            // these are flags to make it so that the loading works properly on infinite scroll
            loading: false,
            registered: false,
            loadingMore: false,
            // this is the element that the infinite scroll observer anchors too
            loadMoreElement: Element,
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
        loadMoreID: function() {
            return `loadMore-all`
        },
        pageNumber: function() {
            return this.cards["all"].page || 1;
        }
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
            this.loadingMore = true;
            this.showLoading();
            // makes an api call for the next page of cards
            await this.getCards({rarity: "all", pageNumber: this.pageNumber });
            this.hideLoading();
            this.loadingMore = false;
        },
        registerObservers: function(){
            if(!this.registered){
                // options to set observer threshold
                // this is the percent the observer needs to be in view to trigger
                const options = {
                    threshold: 0.70,
                };

                // observer will get new cards when in view
                let observer = new IntersectionObserver((entry) => {
                    // if we're not currently loading more and we are intersecting on screen
                    if (entry[0].isIntersecting && !this.loadingMore) {
                        this.loadCards('all');
                    }
                  
                }, options);

                // observe the loadMore element
                observer.observe(this.loadMoreElement);
            }
        },
        // set the load more element so the observer can be registered
        setLoadingElement: function(){
            this.loadMoreElement = this.$refs[this.loadMoreID];
        },

        init: function() {
            this.setLoadingElement();
            this.registerObservers();
        }
    },
  
    created() {
        this.showLoading();
    },
    async mounted(){ 
        // don't load more if we're in search mode
        if(!this.searchMode){ 
            this.init();
        }
        else{
          this.hideLoading();
        }
    }
}
</script>
<style scoped>
/* div element watched by intersection observer */
.loadMore {
    height: 200px;
}
</style>