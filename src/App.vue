<template>
  <div id="app">
    <Navigation :user="user" @signout="signout" class="" />
    <router-view
      class="mt-5 pt-4 px-0"
      :user="user"
      :rooms="rooms"
      @signout="signout"
      @addRoom="addRoom"
      @deleteRoom="deleteRoom"
      @checkIn="checkIn"
    />
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
      user: null,
      rooms: [],
      loading: null
    }
  },
  methods: {
    signout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('/login')
        })
    },
    addRoom(payload) {
      db.collection('users').doc(this.user.uid).collection('rooms').add({
        name: payload[0],
        description: payload[1],
        createdAt: Firebase.firestore.FieldValue.serverTimestamp()
      })
    },
    deleteRoom(payload) {
      db.collection('users').doc(this.user.uid).collection('rooms').doc(payload).delete()
    },
    checkIn(payload) {
      const roomRef = db
        .collection('users')
        .doc(payload.hostID)
        .collection('rooms')
        .doc(payload.roomID)

      roomRef.get().then(doc => {
        if (doc.exists) {
          roomRef.collection('attendees').doc(this.user.uid).set({
            displayName: payload.displayName,
            createdAt: Firebase.firestore.FieldValue.serverTimestamp()
          }).then(() => this.$router.push(`/chat/${payload.hostID}/${payload.roomID}`))
        }
      })
    }
  },

  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        db.collection('users')
          .doc(this.user.uid)
          .collection('rooms')
          .onSnapshot(snapshot => {
            const snapData = []
            snapshot.forEach(doc => {
              snapData.push({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                date: doc.data().createdAt
              })
            })
            this.rooms = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase) {
                return -1
              } else {
                return 1
              }
            })
          })
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

#app {

}
</style>
