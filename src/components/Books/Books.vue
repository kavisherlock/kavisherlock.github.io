<template>
  <div class="content">
    <div class="content-header">2019</div>
    <div class="content-inner">
      <Book
        class="book"
        v-for="(bookName, index) in bookNames2019"
        :key="index"
        :bookName="bookName"
        :init-index=1
        :apiKey="apiKey"
      />
    </div>
    <br />
    <div class="content-header">2018</div>
    <div class="content-inner">
      <Book
        class="book"
        v-for="(bookName, index) in bookNames2018"
        :key="index"
        :bookName="bookName"
        :apiKey="apiKey"
      />
    </div>
    <br />
    <div class="content-header">2017</div>
    <div class="content-inner">
      <Book
        class="book"
        v-for="(bookName, index) in bookNames2017"
        :key="index"
        :bookName="bookName"
        :apiKey="apiKey"
      />
    </div>
    <br />
  </div>
</template>

<script>
import Book from './Book.vue';
import bookList2019 from '../../resources/books/bookList2019.txt';
import bookList2018 from '../../resources/books/bookList2018.txt';
import bookList2017 from '../../resources/books/bookList2017.txt';

export default {
  name: 'Books',
  props: {
    apiKey: String,
  },
  data() {
    return {
      bookNames2019: [],
      bookNames2018: [],
      bookNames2017: [],
    };
  },
  components: {
    Book,
  },
  mounted() {
    this.bookNames2019 = bookList2019.split('\n');
    this.bookNames2018 = bookList2018.split('\n');
    this.bookNames2017 = bookList2017.split('\n');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: center;
  background-color: lavender;
  width: 100%;
  padding-top: 10px;
}

.content-header {
  color: white;
  background-color: purple;
  font-weight: bold;
  font-size: 150%;
  padding: 5px 0;
  margin: 10px 20px;
}

.book {
  display: inline-block;
  margin: 5px;
}
</style>
