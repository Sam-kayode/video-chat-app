<template>
  <div class="login row container-fluid align-items-center justify-content-center p-0 mx-0">
    <div class="col-sm d-flex col-md-6 p-0">
      <img
        src="https://res.cloudinary.com/sam-kay/image/upload/q_auto:low/v%20chat/reg_1_ed3onu.png"
        class="login-img img-fluid"
        alt=""
      />
    </div>
    <div class="col-sm col-md-6 row mx-0">
      <form @submit.prevent="register" class="card bg-light col-md-11 col-lg-6 container p-3 py-5">
        <h2 class="font-weight-bold text-primary login-heading mb-4">Sign Up</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            required
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label class="" for="displayName">Display Name</label>
          <input
            class="form-control"
            type="text"
            id="displayName"
            placeholder="Display Name"
            name="displayName"
            required
            v-model="displayName"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            class="form-control"
            type="password"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="passOne"
          />
          <input
            class="form-control mt-4"
            type="password"
            required
            placeholder="Repeat Password"
            v-model="passTwo"
          />
          <small v-if="error" class="text-danger mt-1 warning"> {{ error }}! </small>
        </div>

        <button type="submit" class="btn btn-primary mb-2">Register</button>

        <Loader v-if="loader" />
      </form>
      <div class="mt-4 mb-5 social text-center col-sm-12">
        or sign up with
        <span class="mx-2"
          ><button class="btn" v-on:click="signInWithGoogle">
            <img
              class="login-icons"
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            />
            Google
          </button></span
        >
        <!-- <span class="mx-2"
            ><button class="btn">
              <img
                class="login-icons"
                img
                src="https://img.icons8.com/fluent/48/4a90e2/facebook-new.png"
              />
              facebook
            </button></span
          > -->
      </div>
    </div>
  </div>
</template>
<script>
import Firebase from 'firebase'
import Loader from '../components/loader.vue'
export default {
  data() {
    return {
      displayName: null,
      email: null,
      passOne: null,
      passTwo: false,
      error: null,
      loader: false
    }
  },
  components: { Loader },
  props: ['user'],
  methods: {
    register() {
      const info = {
        email: this.email,
        password: this.passTwo,
        displayName: this.displayName
      }
      this.loader = true
      if (!this.error) {
        Firebase.auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            userCredentials => {
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName
                })
                .then(() => {
                  this.loader = false
                  this.$router.replace('/')
                })
            },
            error => {
              this.error = error.message
              this.loader = false
            }
          )
      }
    },
    signInWithGoogle() {
      const googleProvider = new Firebase.auth.GoogleAuthProvider()
      Firebase.auth()
        .signInWithPopup(googleProvider)
        .then(() => {
            this.$router.replace('/')
      
        })
        .catch(error => {
          console.log(error)
          this.error=error
        
        })
    }
  },
  watch: {
    passTwo() {
      if (this.passOne != '' && this.passTwo != '' && this.passTwo !== this.passOne) {
        this.error = 'Passwords must match'
      } else {
        this.error = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  max-width: 80%;
}
.login {
  height: 94vh;
}
.login-img {
  max-width: 100%;
  margin-left: auto !important;
}
.login-icons {
  width: 25px;
}
.social {
}
.social button {
  background-color: rgb(232, 232, 240);
}

.social button:hover {
  background-color: rgb(192, 192, 202);
}

@media (max-width: 576px) {
  .login-img {
    width: 40%;
    margin-left: 30% !important;
  }
}
</style>
