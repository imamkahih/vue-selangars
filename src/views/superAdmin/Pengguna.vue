<template>
  <div class="pengguna">
    <Navbar />
    <h1>Pengguna</h1>
    <UserTable />
  </div>
</template>

<script>
import Navbar from "@/components/superAdmin/Navbar.vue";
import UserTable from "@/components/superAdmin/UserTable.vue";

export default {
  name: "sPengguna",
  components: {
    Navbar,
    UserTable,
  },
};
</script>

<style>
</style>