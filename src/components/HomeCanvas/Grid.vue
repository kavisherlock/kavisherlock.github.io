<template>
  <div>
    <div v-for="r in 16" v-bind:key=r>
      <div v-for="c in 16" v-bind:key=c>
        <Block :x=r-1 :y=c-1 />
      </div>
    </div>
  </div>
</template>

<script>
import Block from './Block.vue';

export default {
  name: 'my-grid',
  components: {
    Block,
  },
  inject: ['provider'],
  props: {},
};
</script>
