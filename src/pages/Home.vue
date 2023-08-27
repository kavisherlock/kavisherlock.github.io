<template>
  <div class="content">
    <div class="content-inner">
      <HomeCanvas />
      <div class="about-container">
        <div class="about">
          <h1>About Me</h1>
          <h2>Software Engineer since 2016</h2>
          <h2>Reading since 2017</h2>
          <h2>Blogged between 2018-2020</h2>
          <h2>Gaming since 2020</h2>
          <h2>Cat-Dad since 2021</h2>
        </div>
      </div>
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
  margin-bottom: 100px;
}

.content-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: -50px;
  margin-top: 50px;
}

.about-container {
  margin-top: 30px;
  padding-left: 10%;
  display: flex;
  justify-content: flex-start;
}

.about {
  border-radius: 50%;
  background: hsl(292, 38%, 12%);
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about h1 {
  color: hsl(292, 38%, 92%);
  padding: 0px 20px;
  margin-top: -20px;
  margin-left: -250px;
  width: 150px;
  background: hsl(335, 99%, 68%);
}

.about h2 {
  background: hsl(292, 38%, 92%);
  padding: 0 20px;
  margin-top: 0px;
  margin-left: 250px;
  width: 350px;
  color: hsl(335, 99%, 68%);
}

.about h2:nth-child(3), .about h2:nth-child(5) {
  margin-left: 350px;
}

@media screen and (max-width: 1200px) {
  .about-container {
    padding-left: 5%;
  }

  .about h2 {
    margin-left: 100px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5) {
    margin-left: 200px;
  }
}

@media screen and (max-width: 1000px) {
  .content-inner {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }

  .about-container {
    margin-left: -100px;
  }

  .about h2 {
    margin-left: 150px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5) {
    margin-left: 250px;
  }
}

@media screen and (max-width: 600px) {
  .content-inner {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }

  .about-container {
    margin-left: -100px;
    margin-top: 100px;
  }

  .about {
    height: 400px;
    width: 400px;
  }

  .about h2 {
    padding: 0 20px;
    margin-top: 0px;
    margin-left: 150px;
    width: 350px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5) {
    margin-left: 250px;
  }
}

@media screen and (max-width: 400px) {
  .about h1 {
    margin-left: -200px;
  }

  .about h2 {
    margin-left: 100px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5) {
    margin-left: 180px;
  }
}
</style>
