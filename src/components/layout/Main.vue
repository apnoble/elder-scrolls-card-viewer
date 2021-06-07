<template>
  <div>
        <div class="main-container">
            <card-grid></card-grid>
        </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  components: {
      CardGrid: () => import('../cards/CardGrid.vue')
  }
}
</script>
<style></style>