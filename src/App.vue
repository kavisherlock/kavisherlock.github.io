<template>
  <div
    id="app"
    v-bind:class="{
      blueMajority: $route.name === tabs[0],
      purpleMajority: $route.name === tabs[2],
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
import HomePage from './components/HomePage.vue';
import Header from './components/Header.vue';
import Books from './components/Books/Books.vue';
import Work from './components/Work/WorkList.vue';

export default {
  name: 'app',
  data() {
    return {
      tabs: ['Home', 'Books', 'Work'],
      apiKey: 'AIzaSyBj6pwMyPi8NVKBybSPJ3WWwGfx3__Nr4I',
    };
  },
  components: {
    Header,
    HomePage,
    Books,
    Work,
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
    color: #2c3e50;
    padding: 0 2% 2% 2%;
  }

  .blueMajority {
    background: linear-gradient(rgb(89, 177, 250) 60%, rgb(164, 114, 245), rgb(224, 78, 163));
  }

  .purpleMajority {
    background: linear-gradient(rgb(89, 177, 250), rgb(164, 114, 245) 50%, rgb(224, 78, 163) 100%);
  }

  .pinkMajority {
    background: linear-gradient(rgb(89, 177, 250), rgb(164, 114, 245), rgb(224, 78, 163) 90%);
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
    margin-bottom: 50px;
  }
</style>
