<template>
  <transition
    enter-active-class="bouncein"
  >
    <div class="repo" v-if="Object.keys(this.repo).length > 0">
      <div id="reponame">
        <strong>
          <a :href='this.repo.clone_url' target="_blank">{{this.repo.name}}</a>
        </strong>
      </div>
      {{this.repo.description}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Repo',
  props: {
    repo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .repo {
    color: white;
    padding: 0 15px 20px 15px;
  }

  #reponame {
    margin-bottom: 5px;
  }

  .repo a {
    color: lavender;
  }

  .repo a:hover {
    color: lavenderblush;
  }

  .bouncein {
    animation: bouncein 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes bouncein {
    0% { opacity: 0; transform: translateY(-200px); }
    30%, 55%, 80% { transform: translateY(0) }
    40% { transform: translateY(-40px); }
    70% { transform: translateY(-20px); }
    97% { transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
</style>
