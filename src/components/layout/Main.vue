<template>
  <div>
        <toolbar></toolbar>
        <div class="main-container">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
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