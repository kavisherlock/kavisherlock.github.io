<template>
  <div class="content">
    <div class="content-inner">
      <HomeCanvas />
    </div>

    <div class="section" id="about">
      I've been a Software Engineer at Cerner Corporation in Kansas City since July 2016.<br>
      I got Bachelor's Degree in Computer Engineering from
      University of Illinois at Urbana-Champaign in 2016.
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
  width: 80%;
  padding: 10px;
  margin: 50px 10px;
  margin-left: 10%;
  border: solid rgb(220, 208, 255) 1px;
}
#about {
  line-height: 1.5;
}
</style>
