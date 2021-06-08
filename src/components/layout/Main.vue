<template>
  <div>
        <toolbar></toolbar>
        <div class="main-container">
            <router-view />
        </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
      Toolbar: () => import('./Toolbar.vue')
  }
}
</script>

<style>
.main-container{
    margin-top: 5rem;
}

</style>