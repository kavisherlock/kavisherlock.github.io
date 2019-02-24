<template>
  <div class="content">
    <div class="content-header"
      v-on:click="showBooks = !showBooks"
    >
      {{bookSectionTitle}}
    </div>
    <div class="content-inner">
      <transition leave-active-class="rollout">
        <div v-if=showBooks>
          <Book
            class="book"
            v-for="(bookName, index) in books"
            :key="index"
            :bookName="bookName"
            :apiKey="apiKey"
          />
        </div>
      </transition>
    </div>
    <br />
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'BookSection',
  props: {
    bookSectionTitle: String,
    books: Array,
    initialShowBooks: {
      type: Boolean,
      default: () => (false),
    },
    apiKey: String,
  },
  components: {
    Book,
  },
  data() {
    return {
      showBooks: this.initialShowBooks,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-header {
    color: lavender;
    background-color: rgb(162, 49, 255);
    font-weight: bold;
    font-size: 150%;
    padding: 5px 0;
    margin: 10px 20px;
  }

  .content-header:hover {
    color: lavender;
    background-color: rgb(182, 93, 255);
    cursor: pointer;
  }

  .book {
    display: inline-block;
    margin: 5px;
  }

  .rollout {
    animation: rollout 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes rollout {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -100px, 0);
    }
  }
</style>
