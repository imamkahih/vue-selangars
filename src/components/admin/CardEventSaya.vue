<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="event.image_url"
          class="img-fluid rounded-start"
          style="width: 100%; height: 13vw; object-fit: cover"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ event.nama_event }}</h5>
          <p class="card-text">
            {{ event.nama_penyelenggara }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ event.nama_event }}</small>
          </p>
          <router-link
            :to="`/admin/event-saya-detail/` + event.id"
            class="btn btn-info"
            >Lihat</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardEventSaya",
  props: ["event"],
};
</script>

<style>
</style>