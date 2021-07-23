<template>
  <div class="container">
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
      <div class="col-sm col-md-7 pt-5 pt-md-0">
        <h4 class="">Recent</h4>
        <div class="row">
          <div class="card mx-auto mb-5" v-for="room in rooms" :key="room.name">
            <h5 class="card-header">{{ room.name }}</h5>
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
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
    }
  },
  props: ['rooms', 'loading','user']
}
</script>
<style>
.card {
  min-width: 300px;
}
</style>
