<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">SelangArs</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link mx-1" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link btn btn-sm btn-outline-secondary mx-1"
                to="/login"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link btn btn-sm btn-secondary mx-1"
                to="/register"
                >Register</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>