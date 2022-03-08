<template>
  <Navbar />
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <h1>Login</h1>
      </div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>
          <button class="btn btn-primary mx-auto" @click="login">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        alert("Berhasil Login");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Dashboard" });
      } else {
        alert("Gagal Login!");
        this.$router.push({ name: "Login" });
      }
      // console.warn(result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>