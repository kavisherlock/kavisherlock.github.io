<template><div>
  <div
    id="app"
    v-bind:class="{
      blueMajority: $route.name === 'Home',
      purpleMajority: $route.name !== 'Home',
    }"
  >
    <Header
      id="header"
      :tabs="tabs"
    />
    <transition name="fade" mode="out-in">
      <router-view
        :apiKey="this.apiKey"
      />
    </transition>
  </div>
  <footer
    v-bind:class="{
      bookfooter: $route.name !== 'Home',
    }"
  >
    <p>All rights reserved &#169; 2021 | Designed & developed by <a href="https://twitter.com/kavisherlock">Kavish</a></p>
    <p class="credit">
      Glitchy buttons in the header based on <a href="https://codepen.io/jh3y/pen/PoGbxLp">
        https://codepen.io/jh3y/pen/PoGbxLp
      </a>
    </p>
  </footer></div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      tabs: ['Books', 'Work'],
      apiKey: 'AIzaSyBj6pwMyPi8NVKBybSPJ3WWwGfx3__Nr4I',
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
  body {
    margin: 0;
    font-family: 'Cairo', 'Helvetica', sans-serif;
  }

  #app {
    min-height: 100vh;
    min-width: 500px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(255, 220, 232);
    padding: 0 2% 2% 2%;
  }

  .blueMajority {
    background: linear-gradient(to bottom right, #132535 250px, #1e3952 250px, #34778d 90%);
  }

  .purpleMajority {
    background: linear-gradient(to bottom right, #133553 10%, #34778d);
  }

  .pinkMajority {
    background:radial-gradient(farthest-corner at 40px 40px, #132535, #191027, #296174 90%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s opacity ease-in-out;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  #header {
    margin-bottom: 20px;
  }

  footer {
    text-align: center;
    padding: 20px;
    width: 100%;
    min-width: 480px;;
    height: 100px;
    background: lavenderblush;
    color: #333333aa;
  }

  footer a {
    color: rgb(255, 119, 142);
  }

  .bookfooter {
    background: rgb(230, 246, 250);
  }

  .bookfooter a {
    color: rgb(0, 102, 190);
  }

  footer .credit {
    font-size: 80%;
  }
</style>
