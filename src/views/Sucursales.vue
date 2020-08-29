<template>
  <div>
    <v-carousel
      continuous
      cycle
      class="pt-2"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <header class="text-center pa-5">
      <h1>Nuestras Sucursales</h1>
      <br><br><br>
      <span>Nueva York</span>
      <br>
      <span>Local 10</span>
      <br><br>
      <span>Boston</span>
      <br>
      <span>Local 11</span>
      <br><br>
      <span>San Francisco</span>
      <br>
      <span>Local 12</span>
      <br><br>
      <span>Paris</span>
      <br>
      <span>Local 13</span>
      <br><br>
      <span>Tokyo</span>
      <br>
      <span>Local 14</span>
      <br><br>
      <span>Sydney</span>
      <br>
      <span>Local 15</span>
      <br><br>
      <span>London</span>
      <br>
      <span>Local 16</span>
      <br><br><br>
    </header> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-7.jpg?alt=media&token=5fa39314-e1e1-48e5-890a-bd042a6e86f2',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-8.jpg?alt=media&token=bfd16422-483e-4301-ac24-3ad305015230',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-9.jpg?alt=media&token=751ba931-2cb7-4501-ae7c-efce7e41e9fc',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-10.jpg?alt=media&token=3c8bc43e-bc83-4f19-8a2a-90ae85639780',
        },
      ],
    }
  },
}
</script>