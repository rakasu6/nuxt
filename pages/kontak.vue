<template>
  <div>
    <TheHeader />
    <div class="kontak">
      <div class="container">
        <h1>Hubungi Kami</h1>
        
        <div class="contact-intro">
          <p>Layanan pelanggan 24/7 siap membantu Anda. Pilih metode kontak yang paling nyaman untuk Anda.</p>
        </div>

        <div class="contact-grid">
          <!-- WhatsApp Section -->
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <h2>WhatsApp</h2>
            <p>Layanan cepat 24 jam via WhatsApp</p>
            <a href="https://wa.me/6281234567890" target="_blank" class="contact-button">
              <i class="fab fa-whatsapp"></i>
              Chat WhatsApp
            </a>
          </div>

          <!-- Live Chat Section -->
          <div class="contact-card">
            <div class="contact-icon">
              <i class="far fa-comments"></i>
            </div>
            <h2>Live Chat</h2>
            <p>Bantuan langsung dari customer service kami</p>
            <a href="https://secure.livechatinc.com/licence/13506630/v2/open_chat.cgi?lang=en" target="_blank" class="contact-button">
              <i class="far fa-comments"></i>
              Mulai Chat
            </a>
          </div>

          <!-- Telegram Section -->
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-telegram-plane"></i>
            </div>
            <h2>Telegram</h2>
            <p>Hubungi kami melalui Telegram</p>
            <a href="https://t.me/nibung88" target="_blank" class="contact-button">
              <i class="fab fa-telegram-plane"></i>
              Chat Telegram
            </a>
          </div>
        </div>

        <!-- FAQ Kontak -->
        <div class="contact-faq">
          <h2>Pertanyaan Umum</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3>Berapa lama respon yang diberikan?</h3>
              <p>Kami merespon dalam waktu kurang dari 5 menit untuk semua platform kontak.</p>
            </div>
            <div class="faq-item">
              <h3>Platform mana yang paling cepat?</h3>
              <p>Live Chat kami memberikan respon paling cepat untuk kebutuhan mendesak.</p>
            </div>
            <div class="faq-item">
              <h3>Apakah bisa konsultasi deposit/withdraw?</h3>
              <p>Ya, customer service kami siap membantu proses deposit dan withdraw Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'KontakPage',
}
</script>