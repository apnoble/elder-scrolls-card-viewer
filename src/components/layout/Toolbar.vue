<template>
    <header class="toolbar row">
        <div class="toolbar-items">
            <!-- header -->
            <h1 class="main-header"><router-link tag="li" class="col" class-active="active" to="/" exact>{{header}}</router-link></h1>
            <div class="search-row">
            <!-- search -->
                <div class="search-container">
                    <div class="row">
                        <div class="mobile-row">
                            <input @keyup.enter="searchFunc($event)" v-model="searchTerm" type="text" placeholder="Search.." name="search">
                            <button @click.prevent="searchFunc($event)" type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </header>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import router from "../../router/index.js";
import {constants} from '../../constants.js';

export default {
    name: 'ToolBar',
    data(){
        return {
            header: constants.HEADER,
            
            searchTerm: ""
        }
    },
    computed: {
        ...mapGetters(['search'])
    },
    methods:{
        ...mapActions(['updateSearchTerm', 'customSearch']),
        searchFunc: function(){
            this.updateSearchTerm(this.searchTerm);
            if(this.$route.path != '/search'){
                router.push('/search');
            }
            else{
                this.customSearch();
            }
                
        },
        changeRoute: function(event){
            if(event.target.value.toLowerCase() === 'all')
                router.push(`/`);
            else
                router.push(`/cards/${event.target.value.toLowerCase()}`)
        }
    }
}
</script>

<style lang="css" scoped>
/* top level search bar */
.search-container {
    border: 1px solid var(--primaryColor);
}

.search-container input {
    padding: 0.52rem;
    width: 100%;
    border: 0px;
    color: var(--primaryColor);
    background-color: var(--secondaryDark);
}

.search-container input:focus {
    outline: 1px solid var(--secondaryColor);
}

.search-container button {
    margin-left: auto;
    padding: 0.5rem;
    font-size: 0.9rem;
    border: 0px !important;
    cursor: pointer;
    background-color: var(--secondaryDark);
    color: var(--primaryColor);
}

.mobile-row{
    display:flex;
    flex-direction:row;
    width: 100%;
}
.search-row{
    display:flex;
    width: 100%;
    justify-content: space-evenly;
}
.search-container{
    width:50%
}

.main-header {
    color: var(--primaryColor);
    cursor: pointer;
}

.toolbar {
    position: fixed;
    top:0;
    padding: 1rem 2.5rem;
    margin-top: 0;
    z-index: 99;
    align-items: center;
    justify-content: space-around;
    background-color: var(--primaryDark);
    border-bottom: 3px solid var(--primaryColor);
}

.toolbar-items {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
    
</style>