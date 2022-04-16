<template>
  <div class="lapangansaya">
    <Navbar />
    <div class="container mt-2">
      <router-link class="btn btn-primary" to="/admin/tambah-lapang"
        >Tambah</router-link
      >
      <LapangTable :lapang="lapangan" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/admin/Navbar.vue";
import LapangTable from "@/components/admin/LapangTable.vue";

export default {
  name: "aLapanganSaya",
  data() {
    return {
      lapangan: [],
    };
  },
  methods: {
    setLapang(data) {
      this.lapangan = data;
    },
  },
  components: {
    Navbar,
    LapangTable,
  },
  mounted() {
    var id_owner = JSON.parse(localStorage.getItem("user-info"));
    var id = id_owner.id;
    // console.log(id_owner);
    axios
      .get(`http://localhost:3000/lapang?id_owner=${id}`)
      .then((response) => this.setLapang(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>