<template>
  <Navbar />
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <h1>Login</h1>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
            />
          </div>
          <button class="btn btn-primary mx-auto">Login</button>
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
        let loader = this.$loading.show({});
        setTimeout(() => {
          loader.hide();
        }, 1000);
        this.$toast.success("Berhasil login!");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Dashboard" });
      } else {
        let loader = this.$loading.show({});
        setTimeout(() => {
          loader.hide();
        }, 1000);
        this.$toast.error("Gagal login!");
        this.$router.push({ name: "Login" });
      }
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