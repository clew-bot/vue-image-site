<template>
<div>
  <AppHeader></AppHeader>
  <!-- tells vue router that everytime is matches a route, take the component and stick it right here -->
  <div class="ui container">
  <router-view></router-view>
  </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader"

export default {
    name: 'App',
    components: {
        AppHeader
    }
}
</script>

<style>

</style>

