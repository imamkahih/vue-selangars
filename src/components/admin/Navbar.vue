<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">SelangArs</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link mx-1" to="/admin/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-1" to="/admin/lapangan"
                >Lapangan</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-1" to="/admin/lapangan-saya"
                >Lapangan saya</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-1" to="/admin/event"
                >Event</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-1" to="/admin/event-saya"
                >Event Saya</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ user }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Profil</a></li>
                <li><a class="dropdown-item" @click="logout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    setUser(data) {
      this.user = data;
    },
    logout() {
      if (confirm("Yakin untuk keluar?")) {
        this.$toast.success("Berhasil logout!");
        localStorage.clear();
        this.$router.push({ name: "Login" });
      }
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    this.setUser(user.nama);
  },
};
</script>

<style>
</style>