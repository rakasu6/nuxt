<template>
  <div>
    <TheHeader />
    <div class="games">
      <div class="container">
        <h1>Games IDN Poker</h1>
        <div class="games-grid">
          <div v-for="game in games" :key="game.id" class="game-card">
            <img :src="require(`@/assets/images/${game.image}`)" :alt="game.title" class="game-image">
            <div class="game-info">
              <h3 class="game-title">{{ game.title }}</h3>
              <p class="game-description">{{ game.description }}</p>
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
  name: 'GamesPage',
  data() {
    return {
      games: [
        {
          id: 1,
          title: 'Texas Poker',
          description: 'Permainan poker paling populer dengan sistem Texas Holdem.',
          image: 'texas-pkr.webp'
        },
        {
          id: 2,
          title: 'Omaha Poker',
          description: 'Varian poker dengan 4 kartu hole cards.',
          image: 'omaha.webp'
        },
        {
          id: 3,
          title: 'Super10',
          description: 'Permainan kartu populer dengan sistem nilai tertinggi.',
          image: 'super-10.webp'
        },
        {
          id: 4,
          title: 'Ceme',
          description: 'Permainan kartu tradisional dengan sistem bandar.',
          image: 'ceme.webp'
        },
        {
          id: 5,
          title: 'Capsa Susun',
          description: 'Permainan menyusun 13 kartu menjadi 3 kombinasi.',
          image: 'capsa.webp'
        },
        {
          id: 6,
          title: 'Domino QQ',
          description: 'Permainan domino dengan sistem nilai tertinggi.',
          image: 'domino.webp'
        },
        {
          id: 7,
          title: 'Ceme Keliling',
          description: 'Variasi Ceme dengan sistem keliling.',
          image: 'ceme-k.webp'
        },
        {
          id: 8,
          title: 'BlackJack',
          description: 'Permainan kartu 21 klasik.',
          image: 'super-b.webp'
        },
        {
          id: 9,
          title: 'Bandar Capsa',
          description: 'Varian Omaha dengan pembagian pot tinggi dan rendah.',
          image: 'b-capsa.webp'
        },
        {
          id: 10,
          title: 'Tournament Poker',
          description: 'Kompetisi poker dengan sistem turnamen.',
          image: 'qqs.webp'
        }
      ]
    }
  }
}
</script> 