<template>
  <div v-if="lapang.length">
    <table class="table" id="datatable">
      <thead>
        <tr>
          <!-- <th>No</th> -->
          <th>Foto</th>
          <th>Nama Lapang</th>
          <th>Alamat</th>
          <th>Harga</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lapang in lapang" :key="lapang.id">
          <!-- <td>{{ index + 1 }}</td> -->
          <td>
            <img
              :src="lapang.image_url"
              class="img-thumbnail"
              style="width: 200px; height: 150px"
            />
          </td>
          <td>{{ lapang.nama_lapang }}</td>
          <td>{{ lapang.alamat }}</td>
          <td>{{ lapang.harga }}</td>
          <td>
            <router-link
              :to="`/admin/lapangan/` + lapang.id"
              class="btn btn-info"
              >Lihat</router-link
            >
            <button @click="hapusLapang(lapang.id)" class="btn btn-danger mx-1">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="!lapang.length">
    <h5>Tidak ada data</h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LapangTable",
  props: ["lapang"],
  methods: {
    hapusLapang(id) {
      if (confirm("Yakin untuk dihapus?")) {
        axios
          .delete("http://localhost:3000/lapang/" + id)
          .then(() => {
            this.$toast.success("Berhasil dihapus!");
            location.reload();
          })
          .catch(function (error) {
            console.log(error.response);
          });
      }
    },
  },
};
</script>

<style>
</style>