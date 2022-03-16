<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    if (user) {
      if (user.id_role === "3") {
        this.$router.push({ name: "sDashboard" });
      } else if (user.id_role === "2") {
        this.$router.push({ name: "aDashboard" });
      } else {
        this.$router.push({ name: "uDashboard" });
      }
    } else {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>