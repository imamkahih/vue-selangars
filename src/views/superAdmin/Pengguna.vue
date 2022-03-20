<template>
  <div class="pengguna">
    <Navbar />
    <div class="container mt-2 mb-2">
      <h1>Daftar Pengguna</h1>
    </div>
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