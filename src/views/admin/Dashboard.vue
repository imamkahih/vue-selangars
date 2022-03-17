<template>
  <div class="">
    <Navbar />
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar.vue";

export default {
  name: "aDashboard",
  components: {
    Navbar,
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