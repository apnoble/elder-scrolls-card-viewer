<template>
  <div>
        <div class="main-container">
            <router-view />
        </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  components: {

  }
}
</script>
<style>
.main-container{
    margin-top: 5rem;
}

</style>