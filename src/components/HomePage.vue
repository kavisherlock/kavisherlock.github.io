<template>
  <div class="content">
    <div class="content-inner">
      <HomeCanvas />
    </div>

    <div class="section" id="about">
      <p>I am a Software Engineer at Cerner Corporation in Kansas City. Been here since July 2016</p>
      <p>I got my Bachelor's Degree in Computer Engineering with a minor in Astronomy from
      University of Illinois at Urbana-Champaign in May 2016 with High Honors.</p>
      <p>This is my fourth year doing the 52 books in 52 weeks challenge.</p>
      <p>I also blog about the books I read at
        <a href="https://kavishrm.wordpress.com" target="_blank">kavishrm.wordpress.com</a>.
      </p>
      <p>I ran my first half-marathon on October 20 2018. It is one of my biggest achievements.</p>
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
  padding: 10px 50px;
  margin: 50px 10px;
  margin-left: 10%;
  border: solid rgb(220, 208, 255) 1px;
}
#about {
  font-size: 1.3em;
  line-height: 1.2;
  color: lavenderblush;
}
#about a {
  color: lavender;
}
#about a:hover {
  color: lavenderblush;
}
</style>
