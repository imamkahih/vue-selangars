<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Tambah Event</h1>
      <form @submit.prevent="tambahEvent">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama Event</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="nama_event" />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama Penyelenggara</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="nama_penyelenggara"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Waktu Event</label>
          <div class="col-sm-3">
            <input type="date" class="form-control" v-model="waktu_event" />
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
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/admin/Navbar.vue";

export default {
  name: "aEventTambah",
  components: {
    Navbar,
  },
  data() {
    return {
      nama_event: "",
      nama_penyelenggara: "",
      waktu_event: "",
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
    tambahEvent() {
      var owner = JSON.parse(localStorage.getItem("user-info"));
      var id = owner.id;
      const data = {
        id_owner: id,
        nama_event: this.nama_event,
        nama_penyelenggara: this.nama_penyelenggara,
        waktu_event: this.waktu_event,
        deskripsi: this.deskripsi,
        image_url: this.image_url,
      };
      // console.log(data);
      axios
        .post("http://localhost:3000/event", data)
        .then(() => {
          this.$toast.success("Berhasil ditambahkan!");
          this.$router.push({ name: "aEventSaya" });
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