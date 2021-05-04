<template>
<div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <!-- {{ isLoggedIn }} -->
 <div class="right menu">
     <!-- show this div or the anchor tag -->
     <div v-if="isLoggedIn" class="horizontal">
         <!-- router-link does not do a full page reload -->
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a href="" class="item" @click="logout">Logout</a>
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
    methods: mapActions(['login', 'logout']),
  
    
}
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>