<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo-container">
          <NuxtLink to="/">
            <img src="~/static/logo.png" alt="Nibung88 Logo" class="logo">
          </NuxtLink>
        </div>
        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
          <i class="fas fa-bars"></i>
        </button>
        <nav class="main-nav" :class="{ 'active': isMenuOpen }">
          <ul>
            <li><NuxtLink to="/" class="nav-link">Beranda</NuxtLink></li>
            <li><NuxtLink to="/tentang" class="nav-link">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/games" class="nav-link">Games IDN Poker</NuxtLink></li>
            <li><NuxtLink to="/panduan" class="nav-link">Panduan</NuxtLink></li>
            <li><NuxtLink to="/kontak" class="nav-link">Kontak</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>