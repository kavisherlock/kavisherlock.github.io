<template>
  <div class="content">
    <div class="content-inner">
      <HomeCanvas />
    </div>

    <div class="section" id="about">
      Kavish is a Software Engineer at Cerner Corporation in Kansas City.
      He got his Bachelor's Degree in Computer Engineering
      from University of Illinois at Urbana-Champaign in 2016.
    </div>
  </div>
</template>

<script>
import HomeCanvas from './HomeCanvas/HomeCanvas.vue';

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
.section {
  padding: 10px;
  margin: 10px;
  border: solid rgb(255, 196, 20) 1px;
}
#about {
  line-height: 1.5;
}
</style>
