<template>
  <div class="content">
    <div class="content-inner">
      <HomeCanvas />
    </div>
  </div>
</template>

<script>
import HomeCanvas from '../components/HomeCanvas/HomeCanvas.vue';

export default {
  name: 'HomePage',
  components: {
    HomeCanvas,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: center;
}
</style>
