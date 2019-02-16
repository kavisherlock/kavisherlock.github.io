<template>
  <div class="worklist">
    <section>
      <h2>Text Recognition App</h2>
      <Repo
        class="repo"
        :repo="{ name: 'Under Construction' }"
      />
    </section>
    <section>
      <h2>SmartChess</h2>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('smartchess'))[0]"
      />
    </section>
    <section>
      <h2>Personal Website</h2>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('kavisherlock.github.io'))[0]"
      />
    </section>
    <section>
      <h2>Playgrounds</h2>
      <Repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('playground'))"
        :key="index"
        :repo="repo"
      />
    </section>
    <section>
      <h2>Clones</h2>
      <Repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('clone')
          || repo.name.toLowerCase().includes('client'))"
        :key="index"
        :repo="repo"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Repo from './RepoInfo.vue';

export default {
  name: 'WorkList',
  data() {
    return {
      myRepos: [],
    };
  },
  components: {
    Repo,
  },
  mounted() {
    axios
      .get('https://api.github.com/users/kavisherlock/repos?sort=pushed')
      .then((response) => {
        console.log('1', response.data);
        this.myRepos =
          response.data
            .filter(repo => !repo.fork && !repo.archived);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section div {
    font-size: 120%;
  }
</style>
