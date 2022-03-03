<template>
  <div class="worklist">
    <div class="github">
      Projects Available at <a href="https://github.com/kavisherlock" taget="_blank">https://github.com/kavisherlock</a>
    </div>
    <section>
      <h3>Personal Website (You are here)</h3>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('kavisherlock.github.io'))[0]"
      />
    </section>
    <hr /><br />
    <section>
      <h3>Chess and AI</h3>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('smart-chess'))[0]"
      />
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('chessengine'))[0]"
      />
    </section>
    <hr /><br />
    <section>
      <h3>Blackjack and AI</h3>
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('blackjack'))[0]"
      />
    </section>
    <hr /><br />
    <section>
      <h3>College Projects</h3>
      <Repo
        class="repo"
        :repo="{name: 'Emot', description: 'Research project under Bretl Research Group. Implemented interface to control SMA \
        wires and receive input from various motion and proximity sensors using an Android smartphone and an Arduino. Worked \
        on making the actuators faster by designing a control system to handle current passing through the SMA'}"
      />
      <Repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('prediction'))[0]"
      />
    </section>
    <hr /><br />
    <section>
      <h3>Playgrounds</h3>
      <p>Playgrounds are my way to learn various concepts or technologies by applying them
        in different ways without any specific goal in mind</p>
      <Repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('playground'))"
        :key="index"
        :repo="repo"
      />
    </section>
    <hr /><br />
    <section>
      <h3>Clones</h3>
      <p>Clones are my way to learn different development frameworks with a specific app to build</p>
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
        this.myRepos = response.data
          .filter((repo) => !repo.fork && !repo.archived);
        console.log(this.myRepos);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .worklist {
    margin-bottom: 50px;
  }

  h3 {
    color: hsl(292, 38%, 92%);
  }

  p {
    padding-bottom: 20px;
    margin-top: -15px;
    margin-left: 15px;
    color: white;
  }

  .description {
    color: white;
    padding: 0 15px 20px 20px;
  }

  .description a {
    color: hsl(335, 72%, 85%);
  }

  .description a:hover {
    color: hsl(292, 38%, 92%);
  }

  .description li {
    list-style: none;
    padding: 3px 0;
    margin-left: -40px;
  }

  .github, .github a {
    color: white;
  }
</style>
