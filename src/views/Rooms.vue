<template>
  <div class="container-fluid px-5">
    <h2 class="text-center mb-3">Rooms</h2>

    <div class="row">
      <div class="col-sm col-md-5 ml-auto">
        <form class="border rounded p-3">
          <div class="form-group">
            <label for="Input1">Name</label>
            <input
              type="text"
              class="form-control"
              id="Input1"
              placeholder="Name"
              v-model="roomName"
              ref="roomName"
            />
          </div>
          <div class="form-group">
            <label for="Textarea">Description</label>
            <textarea
              class="form-control"
              id="Textarea"
              rows="3"
              v-model="roomDescription"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="handleAdd"
            :disabled="!roomName"
          >
            Add room
          </button>
        </form>
      </div>
      <div class="col-sm col-md-7 pt-5 pt-md-0 px-0">
        <h4 class="ml-3">Recent</h4>
        <div class="contain">
          <div class="card" v-for="room in rooms" :key="room.name">
            <h5 class="card-header font-weight-bold">{{ room.name }}</h5>
            <div class="card-body">
              <h5 class="card-title">Description</h5>
              <p class="card-text">
                {{ room.description }}
              </p>

              <button
                class="btn btn-sm px-2 btn-danger"
                title="Delete Room"
                @click="$emit('deleteRoom', room.id)"
              >
                <font-awesome-icon icon="trash"></font-awesome-icon>
              </button>
              <router-link
                class="btn btn-sm px-2 ml-2 btn-outline-primary"
                title="access Room"
                :to="`/checkin/${user.uid}/${room.id}`"
              >
                <font-awesome-icon icon="user"></font-awesome-icon>
              </router-link>
              <router-link
                class="btn btn-sm px-2 ml-2 btn-outline-primary"
                title="Chat"
                :to="`/chat/${user.uid}/${room.id}`"
              >
                <font-awesome-icon icon="video"></font-awesome-icon>
              </router-link>
              <span
               class="clipboard btn btn-sm btn-outline-primary " 
                v-clipboard:copy="`https://vee-chat.netlify.app/#/checkin/${user.uid}/${room.id}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <font-awesome-icon icon="clipboard" class="p-0"></font-awesome-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Firebase from 'firebase'
export default {
  name: 'Rooms',
  data() {
    return {
      roomName: null,
      roomDescription: null
    }
  },
  components: {
    FontAwesomeIcon
  },

  methods: {
    handleAdd() {
      var arr = [this.roomName, this.roomDescription]
      this.$emit('addRoom', arr)
      this.roomName = null
      this.roomDescription = null
      this.$refs.roomName.focus()
    },
    onCopy: function (e) {
      alert('Room link has been copied successfuly')
    },
    onError: function (e) {
      alert('Failed to copy the text to the clipboard')
      console.log(e)
    }
  },
    mounted() {
    //this is to obtain the users dsplay name
    Firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.replace('/')
      }
    })
    },
  props: ['rooms', 'loading', 'user']
}
</script>
<style>
.contain {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}

.clipboard{
 color:#262f80; 
 position: absolute;
 right:5px;
bottom:5px;
}
@media (max-width: 576px) {
  .contain {
    padding: 20px;
    grid-gap: 10px;
  }
}
</style>
