<template>
  <!-- Main Nav -->
  <nav class="navbar navbar-expand-lg bg-dark text-white">
    <div class="container">
      <router-link to="/" class="navbar-brand text-white bg-danger px-2"
        >News App</router-link
      >
      <button
        class="navbar-toggler bg-danger"
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white"
              >Latest News</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary disabled">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary disabled">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary disabled">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>
