<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Event Saya</h1>
      <router-link class="btn btn-primary mb-3" to="/admin/event-tambah"
        >Tambah</router-link
      >
      <div class="row">
        <div class="col-md-6 mb-3" v-for="event in event" :key="event.id">
          <CardEvent :event="event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar.vue";
import CardEvent from "@/components/admin/CardEvent.vue";
import axios from "axios";

export default {
  name: "aEventSaya",
  components: {
    Navbar,
    CardEvent,
  },
  data() {
    return {
      event: [],
    };
  },
  methods: {
    setEvent(data) {
      this.event = data;
    },
  },
  mounted() {
    var id_owner = JSON.parse(localStorage.getItem("user-info"));
    var id = id_owner.id;
    // console.log(id_owner);
    axios
      .get(`http://localhost:3000/event?id_owner=${id}`)
      .then((response) => this.setEvent(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>