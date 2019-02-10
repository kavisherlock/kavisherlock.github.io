<template>
  <div class="repo">
    <div id="reponame">
      <strong>
        <a :href='this.repo.clone_url' target="_blank">{{this.repo.name}}</a>
      </strong>
    </div>
    {{this.repo.description}}
  </div>
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
</style>
