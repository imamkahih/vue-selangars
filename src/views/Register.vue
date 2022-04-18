<template>
  <Navbar />
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <h1>Register</h1>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              name="nama"
              v-model="nama"
              aria-describedby="emailHelp"
              required
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
              required
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
              minlength="8"
              required
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
              required
            />
          </div>
          <button class="btn btn-primary mx-auto">
            <div v-if="loading" class="spinner-border spinner-border-sm"></div>
            <span v-if="loading" class="px-1">Loading</span>
            <span v-else>Register</span>
          </button>
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
      id_role: "1",
      loading: false,
    };
  },
  methods: {
    async register() {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;
      }, 2000);
      if (this.password != this.passwordretype) {
        this.$toast.error("Password yang anda masukkan tidak sama!");
        this.$router.push({ name: "Register" });
      } else {
        let result = await axios.post("http://localhost:3000/users", {
          nama: this.nama,
          email: this.email,
          password: this.password,
          id_role: this.id_role,
        });
        // let result = await axios.post(
        //   "https://tepang.herokuapp.com/v1/auth/register/super-administrator",
        //   {
        //     name: this.nama,
        //     email: this.email,
        //     password: this.password,
        //   }
        // );
        console.log(result);
        if (result.status == 201) {
          this.$toast.success("Berhasil registrasi!");
          this.$router.push({ name: "Login" });
        } else {
          this.$toast.success("Gagal registrasi!");
          this.$router.push({ name: "Register" });
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