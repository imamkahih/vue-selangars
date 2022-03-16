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
          <button class="btn btn-primary mx-auto">
            <div v-if="loading" class="spinner-border spinner-border-sm"></div>
            <span v-if="loading" class="px-1">Loading</span>
            <span v-else>Login</span>
          </button>
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
      loading: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;
      }, 2000);
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        this.$toast.success("Berhasil login!");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        if (result.data[0].id_role === "3") {
          this.$router.push({ name: "sDashboard" });
        } else if (result.data[0].id_role === "2") {
          this.$router.push({ name: "aDashboard" });
        } else {
          this.$router.push({ name: "uDashboard" });
        }
      } else {
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