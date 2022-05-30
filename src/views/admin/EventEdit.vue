<template>
  <div class="">
    <Navbar />
    <div class="container">
      <h1>Tambah Event</h1>
      <form @submit.prevent="updateEvent(event.id)">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama Event</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="event.nama_event"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama Penyelenggara</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="event.nama_penyelenggara"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Waktu Event</label>
          <div class="col-sm-3">
            <input
              type="date"
              class="form-control"
              v-model="event.waktu_event"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Deskripsi</label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              rows="3"
              v-model="event.deskripsi"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Foto Event</label>
          <div class="col-sm-4">
            <input
              class="form-control"
              type="file"
              id="formFile"
              @change="upload"
            />
          </div>
          <div class="col-sm-6">
            <img :src="event.image_url" style="height: 150px" />
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
import Navbar from "@/components/admin/Navbar.vue";
import axios from "axios";

export default {
  name: "aEventEdit",
  components: {
    Navbar,
  },
  data() {
    return {
      event: {},
      nama_event: "",
      nama_penyelenggara: "",
      waktu_event: "",
      deskripsi: "",
      image_url: "",
      previewImg: "",
    };
  },
  methods: {
    setEvent(data) {
      this.event = data;
    },
    upload(event) {
      const namaImg = event.target.files[0].name;
      this.image_url = namaImg;
      this.event.image_url = URL.createObjectURL(event.target.files[0]);
    },
    updateEvent(id) {
      var owner = JSON.parse(localStorage.getItem("user-info"));
      var id_owner = owner.id;
      const data = {
        id_owner: id_owner,
        nama_event: this.event.nama_event,
        nama_penyelenggara: this.event.nama_penyelenggara,
        waktu_event: this.event.waktu_event,
        deskripsi: this.event.deskripsi,
        image_url: this.event.image_url,
      };
      axios
        .put(`http://localhost:3000/event/${id}`, data)
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
      .get("http://localhost:3000/event/" + this.$route.params.id)
      .then((response) => this.setEvent(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>