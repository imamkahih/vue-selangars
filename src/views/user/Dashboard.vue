<template>
  <div class="">
    <h1>dashboard user</h1>
    <a href="#" @click="logout" class="btn btn-sm btn-success">Logout</a>
  </div>
</template>

<script>
export default {
  name: "uDashboard",
  methods: {
    logout() {
      this.$confirm("Yakin untuk keluar?").then(() => {
        this.$toast.success("Berhasil logout!");
        localStorage.clear();
        this.$router.push({ name: "Login" });
      });
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    if (!user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>