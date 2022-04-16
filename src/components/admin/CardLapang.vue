<template>
  <div class="card" style="width: 17.5rem">
    <img
      :src="lapang.image_url"
      class="card-img-top rounded-3"
      style="width: 100%; height: 200px"
    />
    <div class="card-body">
      <h5 class="card-title">{{ lapang.nama_lapang }}</h5>
      <p class="card-text">
        <b>{{ lapang.alamat }}</b>
        {{ lapang.jns_olah_raga }}<br />{{ lapang.harga }}
      </p>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Lihat
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Detail Lapang
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6">
                  <img :src="lapang.image_url" class="img-fluid rounded-3" />
                </div>
                <div class="col-md-6">
                  <h5>{{ lapang.nama_lapang }}</h5>
                  <strong>{{ lapang.jns_olahraga }}</strong>
                  <div class="row">
                    <div class="col">
                      <p>{{ lapang.jns_lapang }}</p>
                    </div>
                    <div class="col">
                      <p>{{ lapang.ukuran_lapang }}</p>
                    </div>
                  </div>
                  <p>{{ lapang.alamat }}</p>
                  <p>
                    {{ lapang.deskripsi }}
                  </p>
                  <strong>{{ lapang.harga }}</strong>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Booking</button>
            </div>
          </div>
        </div>
      </div>
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