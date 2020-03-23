<template>
  <transition enter-active-class="bouncein">
    <div class="book" v-if="this.imageThumbnail">
      <img :src='this.imageThumbnail' />
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Book',
  data() {
    return {
      imageThumbnail: '',
      bookTitle: '',
    };
  },
  props: {
    bookName: String,
    apiKey: String,
    initIndex: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    if (this.bookName) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}&q=${encodeURI(this.bookName.trim())}`)
        .then((response) => {
          let index = this.initIndex;
          while (!response.data.items[index].volumeInfo.imageLinks) {
            index += 1;
          }
          this.bookTitle = response.data.items[index].volumeInfo.title;
          this.imageThumbnail = response.data.items[index].volumeInfo.imageLinks.thumbnail;
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .book {
    text-align: center;
    width: auto;
    height: auto;
    max-width: 200px;
  }

  .bouncein {
    animation: bouncein 0.8s linear both;
  }

  @keyframes bouncein {
    0%{
      opacity: 0;
      transform: scale(0);
    }
    50%{
      opacity: 0.9;
      transform: scale(0.9);
    }
    75%{
      opacity: 1;
      transform: scale(1.1);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
