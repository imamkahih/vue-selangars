<template>
  <div>
    <Navbar />
    <div class="container mt-2">
      <div class="card">
        <div class="card-header">Detail lapang</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-5">
              <img
                :src="lapang.image_url"
                class="img-fluid rounded-3"
                style="width: 100%; height: 400px"
              />
            </div>
            <div class="col-md-7">
              <h5 style="card-title">{{ lapang.nama_lapang }}</h5>
              <p class="card-text">
                <strong>{{ lapang.jns_olahraga }}</strong>
              </p>
              <p style="card-text">{{ lapang.alamat }}</p>
              <div class="row">
                <div class="col">
                  <p>{{ lapang.jns_lapang }}</p>
                </div>
                <div class="col">
                  <p>{{ lapang.ukuran_lapang }}</p>
                </div>
              </div>
              <p style="card-text">{{ lapang.deskripsi }}</p>
              <p style="card-text">
                <strong>{{ lapang.harga }}</strong>
              </p>
              <a @click="$router.go(-1)" class="btn btn-secondary">Kembali</a>
              <router-link
                :to="`/admin/edit-lapangan/` + lapang.id"
                class="btn btn-warning mx-1"
                >Edit</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/admin/Navbar.vue";

export default {
  name: "aLapanganDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      lapang: {},
    };
  },
  methods: {
    setLapang(data) {
      this.lapang = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/lapang/" + this.$route.params.id)
      .then((response) => this.setLapang(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>