<template>
    <div class="not row" style="align-items:center; justify-content:center;">
        <div class="col info-background">
            <h1>Resource Not Found</h1>
            <hr>
            <h2>Navigate back to safety with the link below</h2>
            <back-home-button></back-home-button>
        </div>
    </div>    
</template>
<script>
export default {
    components:{
      BackHomeButton: () => import('../components/BackHomeButton.vue')
    },
    data(){
        return {}
    },
}
</script>

<style lang="css" scoped>
   .link-item{
       display: flex;
       align-items: center;
       justify-content: center;
       margin: 0.5rem;
       padding:0.5rem;
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

   hr {
    margin: 1rem 0;
    height: 0.5rem;
    border: 0px;
    background-color: var(--primaryColor);
    color: var(--primaryColor);
  }
   h1,h2,h3,h4,p {
    margin: 0.5rem 0;
  }
  .not{
    margin:0;
    color:#fff;
    margin-top:10rem;
    width: 100%;
  }
  .not .col{
    padding:0;
    font-size:1.2rem !important;
  }

  .info-background{
    background: var(--secondaryDark);
    border: 1px solid var(--primaryColor);
    padding: 2rem !important;
  }
</style>