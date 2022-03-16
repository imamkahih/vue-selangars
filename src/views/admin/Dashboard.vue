<template>
  <div class="">
    <h1>dashboard ADmin</h1>
    <a href="#" @click="logout" class="btn btn-sm btn-success">Logout</a>
  </div>
</template>

<script>
export default {
  name: "aDashboard",
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
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>