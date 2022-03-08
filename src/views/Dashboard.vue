<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <a href="#" @click="logout" class="btn btn-sm btn-success">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    logout() {
      alert("Berhasil Logout");
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>