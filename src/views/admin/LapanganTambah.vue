<template>
  <Navbar />
  <div class="container mb-2">
    <h2>Tambah Lapangan</h2>
    <form @submit.prevent="tambahLapang">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Nama Lapang</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="nama_lapang" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Jenis Olah Raga</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="jns_olahraga" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Jenis Lapang</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="jns_lapang" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Ukuran Lapang</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="ukuran_lapang" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Harga</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" v-model="harga" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Alamat</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="alamat" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Deskripsi</label>
        <div class="col-sm-10">
          <textarea
            class="form-control"
            rows="3"
            v-model="deskripsi"
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
          <img :src="previewImg" style="height: 150px" v-if="previewImg" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label"></label>
        <div class="col-sm-10">
          <a @click="$router.go(-1)" class="btn btn-secondary">Kembali</a>
          <button class="btn btn-primary mx-1">Simpan</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/admin/Navbar.vue";
export default {
  name: "aLapanganTambah",
  components: {
    Navbar,
  },
  data() {
    return {
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
    upload(event) {
      const namaImg = event.target.files[0].name;
      this.image_url = namaImg;
      this.previewImg = URL.createObjectURL(event.target.files[0]);
    },
    tambahLapang() {
      var owner = JSON.parse(localStorage.getItem("user-info"));
      var id = owner.id;
      const data = {
        id_owner: id,
        nama_lapang: this.nama_lapang,
        jns_olahraga: this.jns_olahraga,
        jns_lapang: this.jns_lapang,
        ukuran_lapang: this.ukuran_lapang,
        harga: this.harga,
        alamat: this.alamat,
        deskripsi: this.deskripsi,
        image_url: this.image_url,
      };
      axios
        .post("http://localhost:3000/lapang", data)
        .then(() => {
          this.$toast.success("Berhasil ditambahkan!");
          this.$router.push({ name: "aLapanganSaya" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>