<template>
  <div>
    <div v-for="c in 16" v-bind:key=c>
      <div v-for="r in 16" v-bind:key=r>
        <Block :x=c-1 :y=r-1 />
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
