<template>
  <div class="card">
    <img
      :src="lapang.image_url"
      class="card-img-top rounded-3"
      style="width: 100%; height: 15vw; object-fit: cover"
    />
    <div class="card-body">
      <h5 class="card-title">{{ lapang.nama_lapang }}</h5>
      <p class="card-text">
        <b>{{ lapang.alamat }}</b>
        {{ lapang.jns_olah_raga }}<br />{{ lapang.harga }}
      </p>
      <router-link
        :to="`/admin/booking-lapangan/` + lapang.id"
        class="btn btn-info"
        >Booking</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLapang",
  props: ["lapang"],
};
</script>

<style>
</style>