<template>
  <div class="book-section">
    <div class="book-section-header"
      v-on:click="showBooks = !showBooks"
    >
      <div>{{year}}</div>
      <div>{{bookCount}}</div>
    </div>
    <div class="book-section-inner">
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
    bookCount: String,
    year: String,
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
  .book-section-inner {
    padding: 0 5%;
  }

  .book-section-header {
    color: rgb(208, 244, 255);
    font-weight: bold;
    font-size: 150%;
    padding: 5px 25px;
    margin: 10px 0px;
    transition: background 0.5s ease-in-out;
    display: flex;
    justify-content: space-between;
    background-color: #013A6B;
    background-image: -webkit-linear-gradient(45deg, #013A6B 50%, #004E95 50%);
  }

  .book-section-header:hover {
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    background-color: #013A6B;
    background-image: -webkit-linear-gradient(45deg, #00417a 50%, #0155a3 50%);
  }

  .book {
    display: inline-block;
    width: 130px;
    margin: 1.5%;
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
