<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello world!</h1>
  <Cpc msg="cpc" />
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
