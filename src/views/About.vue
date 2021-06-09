<template>
  <div class="about row none align-center justify-center">
    <div class="col info-background">
      <h1>About</h1>
      <hr>
      <div class="row space-between">
        <div class="col">
              <h2>App Name</h2>
              <p>{{appInfo.name}}</p>
        </div>
        <div class="col"> 
              <h2>Version</h2>
              <p>{{appInfo.version}}</p>
        </div>
      </div>
    
      <h2>Description</h2>
      <ul>
        <li>
          <p>This project is a <a class="vue-green" href="https://vuejs.org/" target="_blank">vue.js</a> app that utilizes the public Elder Scrolls Legends API to display 
            card images and card info.
          </p>
        </li>
        <li>
          <p>
            It uses <a class="vue-green" href="https://vuex.vuejs.org//" target="_blank">vuex</a> to manage app state and <a class="vue-green" href="https://router.vuejs.org/" target="_blank">vue router</a> to handle page navigation.
          </p>
        </li>
        
        <li>
            <p>Key Dependencies: <code><small>{{appInfo.dependencies}}</small></code></p>           
        </li>
      </ul>

      <h2>How To Use</h2>
      <ul>
        <li><p>Display all cards on the home page or search for specific cards by name with the search bar.</p></li>
      </ul>

      <h2>More Info</h2>
      <ul>
        <li>
          <p>More information about the API can be found at the following link: 
          <a href="https://docs.elderscrollslegends.io/#documentationgetting_started" target="_blank">
            Elder Scrolls Legends API
          </a></p>
        
          <p>This app was created by Alex Noble: 
          <a href="https://github.com/apnoble">GitHub</a>
          <span>   -   </span>
          <a href="https://www.linkedin.com/in/apnoble/">LinkedIn</a>
          </p>
        </li>
      </ul>
      <back-home-button variant="primary"></back-home-button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  components:{
      BackHomeButton: () => import('../components/BackHomeButton.vue')
  },
  computed:{
    ...mapGetters([
      'appInfo',
    ])
  }
}
</script>

<style lang="css" scoped>
  h1,h2,h3,h4 {
    margin: 0;
    margin:0.25rem 0;
  }
  p{
    margin: 0;
    padding:0.5rem 1rem;
  }
  ul{
    list-style-type: none;
    margin-left: 0 ;
    margin-bottom:.5rem;
  }
  .about{
    margin:0;
    color:#fff;
    margin-top:6rem;
    width: 100%;
  }
  .about .col{
    padding:0;
    font-size:1.2rem;
  }

  hr {
    margin: 1rem 0;
    height: 0.5rem;
    border: 0px;
    background-color: var(--primaryColor);
    color: var(--primaryColor);
  }
  


  .space-between{
    justify-content:space-between;
  }
.align-center{
    align-items:center;
}

.vue-green{
    color:#42b983;
}
</style>