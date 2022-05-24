<template>
  <div class="">
    <Navbar />
    <div class="container mt-2">
      <div class="card">
        <div class="card-header">Detail lapang</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-5">
              <img
                :src="lapang.image_url"
                class="img-fluid rounded-3"
                style="width: 100%; height: 400px"
              />
            </div>
            <div class="col-md-7">
              <h5 style="card-title">{{ lapang.nama_lapang }}</h5>
              <p class="card-text">
                <strong>{{ lapang.jns_olahraga }}</strong>
              </p>
              <p style="card-text">{{ lapang.alamat }}</p>
              <div class="row">
                <div class="col">
                  <p>{{ lapang.jns_lapang }}</p>
                </div>
                <div class="col">
                  <p>{{ lapang.ukuran_lapang }}</p>
                </div>
              </div>
              <p style="card-text">{{ lapang.deskripsi }}</p>
              <p style="card-text">
                <strong>{{ lapang.harga }}</strong>
              </p>
              <a @click="$router.go(-1)" class="btn btn-secondary">Kembali</a>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary mx-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Booking Lapang
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
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Booking Lapang
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="">
                        <div class="mb-3 row">
                          <label class="col-sm-4 col-form-label">Tanggal</label>
                          <div class="col-sm-8">
                            <input
                              type="text"
                              class="form-control"
                              v-model="nama_lapang"
                            />
                          </div>
                        </div>
                        <div class="mb-3 row">
                          <label class="col-sm-4 col-form-label"
                            >Mulai jam</label
                          >
                          <div class="col-sm-8">
                            <input
                              type="text"
                              class="form-control"
                              v-model="nama_lapang"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "aLapanganBooking",
  data() {
    return {
      lapang: {},
    };
  },
  components: {
    Navbar,
  },
  methods: {
    setLapang(data) {
      this.lapang = data;
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