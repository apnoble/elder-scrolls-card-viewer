<template>
  <div id="app">
    <main-container></main-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
     MainContainer: () => import("./components/layout/Main.vue")
  }
}
</script>

<style></style>
