<template>
  <h1>Nav</h1>
  <router-link to="/">nav one</router-link> | 
  <router-link to="/cpc2">nav two</router-link>
  <hr />
  <router-view></router-view>
</template>

<script>
import Cpc from './components/Cpc.vue'

export default {
  name: 'App',
  components: {
    Cpc
  }
}
</script>
