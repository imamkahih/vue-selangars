<template>
  <div class="">
    <Navbar />
    <div class="container mt-2">
      <div class="card">
        <div class="card-header">Detail Event</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-5">
              <img
                :src="event.image_url"
                class="img-fluid rounded-3"
                style="width: 100%; height: 400px"
              />
            </div>
            <div class="col-md-7">
              <h5 class="card-title">{{ event.nama_event }}</h5>
              <p class="card-text">
                {{ event.nama_penyelenggara }}
              </p>
              <p class="card-text">
                <strong>{{ event.waktu_event }}</strong>
              </p>
              <p class="card-text">
                {{ event.deskripsi }}
              </p>
              <a @click="$router.go(-1)" class="btn btn-secondary">Kembali</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar.vue";
import axios from "axios";

export default {
  name: "aEventDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      event: {},
    };
  },
  methods: {
    setEvent(data) {
      this.event = data;
    }
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