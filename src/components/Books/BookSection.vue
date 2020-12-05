<template>
  <div class="content">
    <div class="content-header"
      v-on:click="showBooks = !showBooks"
    >
      {{bookSectionTitle}}
    </div>
    <div class="content-inner">
      <transition enter-active-class="rollin" leave-active-class="rollout">
        <div v-if=showBooks class="books">
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
    background-color: rgb(81, 25, 128);
    font-weight: bold;
    font-size: 150%;
    padding: 5px 0;
    margin: 10px 0px;
    transition: background 0.5s ease-in-out;
  }

  .content-header:hover {
    color: lavender;
    background-color: rgb(126, 36, 201);
    cursor: pointer;
    transition: background 0.5s ease-in-out;
  }

  .book {
    display: inline-block;
    margin: 5px;
  }

  .rollin {
    animation: rollin 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes rollin {
    0% {
      opacity: 0;
      height: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      height: 500px;
    }
  }

  .rollout {
    animation: rollout 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes rollout {
    0% {
      opacity: 1;
      height: 500px;
    }
    20% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      height: 0;
    }
  }
</style>
