<template>
  <div><img v-for="image in allImages" :key="image.id" :src="image.link" /></div>

  
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
    name: "ImageList",
    computed: mapGetters(['allImages']),
    methods: mapActions(['fetchImages']),
    //gets called automatically
    created() {
        this.fetchImages();
    }
}
</script>

<style>

</style>