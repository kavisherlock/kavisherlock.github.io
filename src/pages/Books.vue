<template>
  <div class="books-container">
    <h2 class="subtext">Yearly Target: 52 Books</h2>
    <p class="subtext">Blog: <a href="https://kavishandbooks.wordpress.com/" target="_blank">Kavish and Books</a></p>
    <BookSection
      :year="'2021'"
      :bookCount="'(5/52)'"
      :books="bookNames2021"
      :apiKey="apiKey"
      :initialShowBooks="true"
    />
    <BookSection
      :year="'2020'"
      :bookCount="'(48/52)'"
      :books="bookNames2020"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2019'"
      :bookCount="'(46/52)'"
      :books="bookNames2019"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2018'"
      :bookCount="'(57/52)'"
      :books="bookNames2018"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2017'"
      :bookCount="'(55/52)'"
      :books="bookNames2017"
      :apiKey="apiKey"
    />
  </div>
</template>

<script>
import BookSection from '../components/Books/BookSection.vue';
import bookList2021 from '../resources/books/bookList2021.txt';
import bookList2020 from '../resources/books/bookList2020.txt';
import bookList2019 from '../resources/books/bookList2019.txt';
import bookList2018 from '../resources/books/bookList2018.txt';
import bookList2017 from '../resources/books/bookList2017.txt';

export default {
  name: 'Books',
  props: {
    apiKey: String,
  },
  data() {
    return {
      bookNames2021: [],
      bookNames2020: [],
      bookNames2019: [],
      bookNames2018: [],
      bookNames2017: [],
    };
  },
  components: {
    BookSection,
  },
  mounted() {
    this.bookNames2021 = bookList2021.split('\n');
    this.bookNames2020 = bookList2020.split('\n');
    this.bookNames2019 = bookList2019.split('\n');
    this.bookNames2018 = bookList2018.split('\n');
    this.bookNames2017 = bookList2017.split('\n');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books-container {
  text-align: center;
  background-color: rgb(230, 246, 250);
  width: 100%;
  padding-top: 10px;
  margin-bottom: 100px;
  min-width: 100px;
}

.subtext, .subtext a {
  color: rgb(19, 37, 53);
}
</style>
