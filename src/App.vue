<template>
  <div id="app">
    <Header
      id="header"
      :currentTab="currentTab"
      :tabs="tabs"
      @switchTabs="switchTabs"
    />
    <component
      v-bind:is="currentTabComponent"
      class="tab"
      :apiKey="this.apiKey"
    />
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
      currentTab: 'Home',
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
  computed: {
    currentTabComponent() {
      switch (this.currentTab) {
        case 'Home': return HomePage;
        case 'Books': return Books;
        case 'Work': return Work;
        default: return null;
      }
    },
  },
  methods: {
    switchTabs(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  font-family: 'ABeeZee', 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(89, 177, 250);
  margin: 0 15%;
  padding: 0 2% 2% 2%;
}

#header {
  margin-bottom: 50px;
}
</style>
