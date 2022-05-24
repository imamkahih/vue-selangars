<template>
  <div class="lapangan">
    <Navbar />
    <div class="container">
      <h2 class="my-4">Daftar Lapangan</h2>
      <!-- <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-4">
        <div
          class="col d-flex gap-1"
          v-for="lapang in lapangan"
          :key="lapang.id"
        >
          <CardLapang :lapang="lapang" />
        </div>
      </div> -->
      <div class="row g-4 g-md-auto">
        <div class="col-md-3" v-for="lapang in lapangan" :key="lapang.id">
          <CardLapang :lapang="lapang" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar.vue";
import CardLapang from "@/components/admin/CardLapang.vue";
import axios from "axios";

export default {
  name: "aLapangan",
  components: {
    Navbar,
    CardLapang,
  },
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
  mounted() {
    axios
      .get("http://localhost:3000/lapang")
      .then((response) => this.setLapang(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>