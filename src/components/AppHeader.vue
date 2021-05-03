<template>
<div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <!-- {{ isLoggedIn }} -->
 <div class="right menu">
     <!-- show this div or the anchor tag -->
     <div v-if="isLoggedIn">
        Galleries Button 
     </div>
<!-- v- else must be place after an element that has a v-if -->
     <a v-else href="#" class="ui item" @click="login">Login</a>
 </div>
</div>
</template>

<script>
// mapactions knows what actions we created in store
// Mapgetters get stuff from auth module and put it in here etc state
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AppHeader',
    //would use ...mapGetters if wanted to add more methods
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login']),
  
    
}
</script>

<style>

</style>