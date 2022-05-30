<template>
  <div class="">
    <Navbar />
    <div class="container">
      <h1>Daftar Event</h1>
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
  name: "aEvent",
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
    axios
      .get(`http://localhost:3000/event`)
      .then((response) => this.setEvent(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>