<template>
  <div class="table-responsive">
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>No</th>
          <th>Foto</th>
          <th>Nama Lapang</th>
          <th>Alamat</th>
          <th>Harga</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lapang, index) in lapang" :key="lapang.id">
          <td>{{ index + 1 }}</td>
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
            <button @click="hapusLapang" class="btn btn-danger mx-1">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "LapangTable",
  props: ["lapang"],
  methods: {
    hapusLapang() {
      console.log("Detail");
    },
  },
};
</script>

<style>
</style>