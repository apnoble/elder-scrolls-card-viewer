<template>
  <div class="home">
    <div class="about row" style="align-items: center; justify-content: center">
      <div class="col">
        <div class="row" style="align-items: center; justify-content: center">
          <h1>All Cards</h1>
        </div>
        <grid-container :search-mode="false"></grid-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    GridContainer: () => import("../components/layout/GridContainer.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
p {
  margin: 0.5rem 0;
}

.about{
    margin:0;
    color:#fff;
    margin-top:5rem;
    width: 100%;
  }
  .about .col{
    padding:0rem;
    font-size:1.2rem !important;
  }
</style>
