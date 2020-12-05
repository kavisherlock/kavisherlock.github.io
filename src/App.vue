<template>
  <div
    id="app"
    v-bind:class="{
      blueMajority: $route.name === 'Home',
      purpleMajority: $route.name === tabs[0],
      pinkMajority: $route.name === tabs[1],
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
  #app {
    min-height: 100vh;
    min-width: 500px;
    font-family: 'ABeeZee', 'Helvetica', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #aed2f7;
    padding: 0 2% 2% 2%;
  }

  .blueMajority {
    background: linear-gradient(rgb(19, 37, 53) 60%, rgb(25, 16, 39), rgb(54, 22, 41));
  }

  .purpleMajority {
    background: linear-gradient(rgb(19, 37, 53), rgb(25, 16, 39) 50%, rgb(54, 22, 41) 100%);
  }

  .pinkMajority {
    background: linear-gradient(rgb(19, 37, 53), rgb(25, 16, 39), rgb(54, 22, 41) 90%);
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
</style>
