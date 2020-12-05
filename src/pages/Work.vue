<template>
  <div class="worklist">
    <section>
      <h2>Smart Chess</h2>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('smart-chess'))[0]"
      />
    </section>
    <section>
      <h2>Personal Website (You are here)</h2>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('kavisherlock.github.io'))[0]"
      />
    </section>
    <section>
      <h2>Multi Target Prediction</h2>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('prediction'))[0]"
      />
    </section>
    <section>
      <h2>Clones</h2>
      <p>Clones are my way to learn different development frameworks with a specific app to build</p>
      <Repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('clone')
          || repo.name.toLowerCase().includes('client'))"
        :key="index"
        :repo="repo"
      />
    </section>
    <section>
      <h2>Playgrounds</h2>
      <p>Playgrounds are my way to learn various concepts or technologies by applying them
        in different ways without any specific goal in mind</p>
      <Repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('playground'))"
        :key="index"
        :repo="repo"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Repo from '../components/Work/RepoInfo.vue';

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
        this.myRepos =
          response.data
            .filter(repo => !repo.fork && !repo.archived);
        console.log(this.myRepos);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section div {
    font-size: 120%;
  }

  section p {
    color: white;
    padding-bottom: 20px;
  }

  .description {
    color: white;
    padding: 0 15px 20px 20px;
  }

  .description a {
    color: lavender;
  }

  .description a:hover {
    color: lavenderblush;
  }

  .description li {
    list-style: none;
    padding: 3px 0;
    margin-left: -40px;
  }
</style>
