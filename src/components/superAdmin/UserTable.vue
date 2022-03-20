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
          <td>
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="getUser(user.id)"
            >
              Ubah Role
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Ubah Role Pengguna
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Nama</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        v-model="detail.nama"
                        readonly
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Email</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        v-model="detail.email"
                        readonly
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Role</label
                      >
                      <select class="form-select">
                        <option>Super Admin</option>
                        <option>Admin</option>
                        <option>Pengguna</option>
                      </select>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Batal
                    </button>
                    <button type="button" class="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
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
      detail: [],
      search: "",
    };
  },
  methods: {
    setUser(data) {
      this.users = data;
    },
    detailUser(data) {
      this.detail = data;
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
    getUser(id) {
      axios
        .get("http://localhost:3000/users/" + id)
        .then((response) => this.detailUser(response.data))
        .catch((error) => console.log("Gagal :", error));
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