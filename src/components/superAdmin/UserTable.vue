<template>
  <div class="container">
    <div class="input-group mb-3">
      <input
        v-model="search"
        type="text"
        class="form-control"
        placeholder="Pencarian"
        aria-label="Cari"
        aria-describedby="basic-addon1"
        @keyup="searchUser"
      />
    </div>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Role</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.email }}</td>
          <td>{{ setRoles(user.id_role) }}</td>
          <td>edit/hapus</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserTable",
  data() {
    return {
      users: [],
      search: "",
    };
  },
  methods: {
    setUser(data) {
      this.users = data;
    },
    searchUser() {
      axios
        .get("http://localhost:3000/users?q=" + this.search)
        .then((response) => this.setUser(response.data))
        .catch((error) => console.log("Gagal :", error));
    },
    setRoles(role_id) {
      if (role_id === "3") {
        return "Super Admin";
      } else if (role_id === "2") {
        return "Admin";
      } else {
        return "Pengguna";
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/users")
      .then((response) => this.setUser(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>