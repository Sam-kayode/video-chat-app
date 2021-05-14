<template>
  <div>
    <nav class="navbar navbar-expand navbar-light pb-0 pt-1 fixed-top bg-light">
      <div class="container-fluid mb-1">
        <div class="topnav-links">
          <router-link class="px-2" to="/rooms" v-if="user">Rooms</router-link>
          <router-link class="px-2" to="/register">Register</router-link>
          <router-link class="px-2" to="/login" v-if="!user">log in</router-link>
          <span class="px-2" @click="$emit('signout')" v-if="user">Sign out</span>
        </div>
        <button
          class="harmburger"
          :class="[{ opened: toggled }]"
          @click="toggle"
          aria-label="Main Menu"
          v-if="user"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>

        <div class="navbar-nav ml-auto">
          <router-link class="navbar-brand p-0" to="/"
            ><span class="pr-1"><img src="../assets/logo.png" class="logo" alt="" /></span>
            <span class="brand-name text-primary">V-chat</span>
            <!-- <span class="navbar-text small text-primary">
            : Hi <span class="font-weight-bold">{{ user }}</span></span
          > -->
          </router-link>
          <!-- <span class="user-details" v-if="user">Hi, {{user.displayName}}</span> -->
        </div>
      </div>
    </nav>
    <transition name="fade" v-if="user">
      <div class="sidenav" v-if="toggled">
        <ul class="p-0">
          <li class="px-1 py-3" @click="toggle">
            <router-link to="/rooms" v-if="user" @click="toggle">Rooms</router-link>
          </li>
          <li class="px-1 py-3" @click="toggle">
            <router-link to="/register" >Register</router-link>
          </li>
          <li class="px-1 py-3" @click="
                $emit('signout');
                toggle
              ">
            <span
             
              v-if="user"
              >Sign out</span
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['user'],
  data() {
    return { toggled: false }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
nav {
  border-bottom: 1px solid rgb(199, 199, 199);
}
.logo {
  width: 50px;
}
.brand-name {
  font-family: 'Pacifico', cursive;
  font-size: 25px;
}
.user-details {
  font-family: 'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
  font-size: 20px;
}

.sidenav {
  width: 300px;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: rgb(244, 246, 248);
}

.sidenav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.sidenav ul li {
  list-style-type: none;
}

.harmburger {
  background-color:rgb(244, 246, 248,0.1);
  border: none;
  cursor: pointer;
  padding: 0;
  position: fixed;
  margin-top: 2.5px;
  left: 0;
  z-index: 40000;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 8;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}
.opened .line2 {
  stroke-dasharray: 1 90;
  stroke-dashoffset: -90;
  stroke-width: 8;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}
button {
  outline: none !important;
}

svg {
  height: 40px;
  width: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (min-width: 576px) {
  .sidenav,
  .harmburger {
    display: none;
  }
}

@media (max-width: 576px) {
  .topnav-links {
    display: none;
  }
}
</style>
