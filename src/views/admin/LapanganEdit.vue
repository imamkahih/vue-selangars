<template>
  <div class="">
    <Navbar />
    <div class="container mt-2">
      <div class="card">
        <div class="card-header">Edit lapang</div>
        <div class="card-body">
          <div class="row">
            <form @submit.prevent="updateLapang(lapang.id)">
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nama Lapang</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="lapang.nama_lapang"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Jenis Olah Raga</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="lapang.jns_olahraga"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Jenis Lapang</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="lapang.jns_lapang"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Ukuran Lapang</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="lapang.ukuran_lapang"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Harga</label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    v-model="lapang.harga"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Alamat</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="lapang.alamat"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Deskripsi</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="3"
                    v-model="lapang.deskripsi"
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Foto Lapangan</label>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    @change="upload"
                  />
                </div>
                <div class="col-sm-6">
                  <img :src="lapang.image_url" style="height: 150px" />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                  <a @click="$router.go(-1)" class="btn btn-secondary"
                    >Kembali</a
                  >
                  <button class="btn btn-primary mx-1">Simpan</button>
                </div>
              </div>
            </form>
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
  name: "aLapanganEdit",
  components: {
    Navbar,
  },
  data() {
    return {
      lapang: {},
      nama_lapang: "",
      jns_olahraga: "",
      jns_lapang: "",
      ukuran_lapang: "",
      harga: "",
      alamat: "",
      deskripsi: "",
      image_url: "",
      previewImg: "",
    };
  },
  methods: {
    setLapang(data) {
      this.lapang = data;
    },
    upload(event) {
      const namaImg = event.target.files[0].name;
      this.image_url = namaImg;
      this.lapang.image_url = URL.createObjectURL(event.target.files[0]);
    },
    updateLapang(id) {
      var owner = JSON.parse(localStorage.getItem("user-info"));
      var id_owner = owner.id;
      const data = {
        id_owner: id_owner,
        nama_lapang: this.lapang.nama_lapang,
        jns_olahraga: this.lapang.jns_olahraga,
        jns_lapang: this.lapang.jns_lapang,
        ukuran_lapang: this.lapang.ukuran_lapang,
        harga: this.lapang.harga,
        alamat: this.lapang.alamat,
        deskripsi: this.lapang.deskripsi,
        image_url: this.lapang.image_url,
      };
      axios
        .put(`http://localhost:3000/lapang/${id}`, data)
        .then(() => {
          this.$toast.success("Berhasil edit!");
          this.$router.go(-1);
        })
        .catch(function (error) {
          console.log(error.response);
        });
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