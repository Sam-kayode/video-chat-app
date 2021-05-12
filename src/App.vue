<template>
  <div id="app">
    <Navigation :user="user" class=""/>
    <router-view :user="user" class="mt-5 pt-4" />
  </div>
</template>
<script>
import db from './db.js'
import Firebase from 'firebase'
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  data() {
    return {
      user: null
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.user = user
      }
    })
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
$primary: #262f80;
@import 'node_modules/bootstrap/scss/bootstrap';
 
#app{


}
</style>
