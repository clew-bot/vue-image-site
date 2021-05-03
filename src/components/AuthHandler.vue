<template>
  <div>Please Wait</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AuthHandler',
    // lifecycle methods
    methods: mapActions(['finalizeLogin']),
    created() {
        //invoke finalizeLogin method

        this.finalizeLogin(window.location.hash)
        // finds everything with the hash forward
    }
}
</script>

<style>

</style>