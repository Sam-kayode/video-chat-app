<template>
  <div id="app">
    <Navigation :user="user" />
    <router-view :user="user" />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import db from './db.js'

export default {
  name: 'App',
  data() {
    return {
      user: null
    }
  },
  mounted() {
    db.collection('users')
      .doc('SbwYFOuT48yov90lcRKB')
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name
      })
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
$primary: #5f2882;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
