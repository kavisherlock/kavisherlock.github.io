<template>
  <div class="book">
    <img :src='this.imageThumbnail' />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Book',
  data() {
    return {
      imageThumbnail: '',
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
  color: white;
  width: auto;
  height: auto;
  max-width: 200px;
}
</style>
