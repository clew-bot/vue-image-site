<template>
<div>
  <AppHeader></AppHeader>
  <!-- tells vue router that everytime is matches a route, take the component and stick it right here -->
  <router-view></router-view>
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

