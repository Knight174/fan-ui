<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Fan-UI</h1>
      <h2>A Very Nice UI Framework!</h2>
      <p class="actions">
        <a href="#">Github</a>
        <a href="#">Start</a>
      </p>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
  name: 'home',
  components: {
    Topnav
  }
}
</script>
<style lang="scss" scoped>

</style>