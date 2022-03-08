<template>
  <Navbar />
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <h1>Register</h1>
      </div>
      <div class="col-md-6">
        <form @submit="register">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              name="nama"
              v-model="nama"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="password"
            />
          </div>
          <div class="mb-3">
            <label for="password_retype" class="form-label"
              >Password Retype</label
            >
            <input
              type="password"
              class="form-control"
              id="passwordretype"
              name="passwordretype"
              v-model="passwordretype"
            />
          </div>
          <input
            class="btn btn-primary btn-md mx-auto"
            value="Register"
            type="submit"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Register",
  components: {
    Navbar,
  },
  data() {
    return {
      nama: "",
      email: "",
      password: "",
      passwordretype: "",
    };
  },
  methods: {
    async register(e) {
      e.preventDefault();
      // console.warn(this.nama, this.email, this.password, this.passwordretype);
      if (this.password != this.passwordretype) {
        alert("Password yang dimasukkan tidak sama");
        this.$router.push({ name: "Register" });
      } else {
        let result = await axios.post("http://localhost:3000/users", {
          nama: this.nama,
          email: this.email,
          password: this.password,
        });
        // console.warn(result);
        if (result.status == 201) {
          alert("Berhasil Register");
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Dashboard" });
        }
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Dashboard" });
    }
  },
};
</script>

<style>
</style>