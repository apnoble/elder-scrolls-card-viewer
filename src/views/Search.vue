<template>
  <div class="search">
    <div class="about row" style="align-items:center; justify-content:center;">
        <div class="col">
            <div class="row" style="align-items:center; justify-content:center;">
                <h1>Search Results</h1>
            </div>
           <grid-container :search-mode="true" :loading-search="searchLoading"></grid-container>
        </div>
    </div>
  </div>
</template>
<script>

import {mapGetters, mapActions} from "vuex";

export default {
  name: 'Search' ,
   components: { 
    GridContainer: () => import("../components/layout/GridContainer.vue"),
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters(['search', 'searchLoading'])
  },
  methods: {
    ...mapActions(['updateSearch', 'customSearch'])
  },

  created(){
      console.log("created");
    if(this.search.term){
        console.log("created if");
      this.customSearch();
    }
  },
  mounted(){
  }
}
</script>

<style lang="css" scoped>
  
</style>