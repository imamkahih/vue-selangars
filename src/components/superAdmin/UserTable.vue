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
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Role</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
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
                    <div class="mb-3 row">
                      <label for="staticEmail" class="col-sm-2 col-form-label"
                        >Nama</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="staticEmail"
                          v-model="detail.nama"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="staticEmail" class="col-sm-2 col-form-label"
                        >Email</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="email"
                          readonly
                          class="form-control-plaintext"
                          id="staticEmail"
                          v-model="detail.email"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="staticEmail" class="col-sm-2 col-form-label"
                        >Role</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="staticEmail"
                          :value="setRoles(detail.id_role)"
                        />
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="detail.id_role"
                        >
                          <option
                            v-for="role in roles"
                            :value="role.value"
                            :key="role.id"
                          >
                            {{ role.text }}
                          </option>
                        </select>
                      </div>
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="updateRole(detail.id)"
                    >
                      <div
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                      ></div>
                      <span v-if="loading" class="px-1">Loading</span>
                      <span v-else>Simpan</span>
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
      roles: [
        { text: "Pengguna", value: "1" },
        { text: "Admin", value: "2" },
        { text: "Super Admin", value: "3" },
      ],
      loading: false,
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
    updateRole(id) {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;
      }, 2000);
      const data = {
        nama: this.detail.nama,
        email: this.detail.email,
        id_role: this.detail.id_role,
      };
      axios.put(`http://localhost:3000/users/${id}`, data);
      this.$toast.success("Berhasil diubah!");
      this.$router.go();
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