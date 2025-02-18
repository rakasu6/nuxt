<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <img src="~/static/logo.png" alt="Nibung88 Logo" class="footer-logo">
        <p>Nibung88 adalah platform IDN Poker terpercaya dengan layanan terbaik dan sistem keamanan yang terjamin.</p>
      </div>

      <div class="footer-section">
        <h3>Menu Utama</h3>
        <ul>
            <li><NuxtLink to="/tentang">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/games">Games IDN Poker</NuxtLink></li>
            <li><NuxtLink to="/panduan">Panduan</NuxtLink></li>
            <li><NuxtLink to="/kontak">Kontak</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Kontak Kami</h3>
        <ul>
          <li><i class="fas fa-phone"></i> WhatsApp: +62 812 7595 5498</li>
          <li><i class="fas fa-envelope"></i> Email: cs@nibung88.com</li>
          <li><i class="fab fa-telegram"></i> Telegram: @Nibung88</li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Metode Pembayaran</h3>
        <div class="payment-methods">
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 NIBUNG88. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
