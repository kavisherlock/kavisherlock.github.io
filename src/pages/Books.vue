<template>
  <div class="books-container">
    <h2 class="subtext">Yearly Target: 52 Books</h2>
    <p class="subtext">Blog: <a href="https://kavishandbooks.wordpress.com/" target="_blank">Kavish and Books</a></p>
    <BookSection
      v-for="(booksList, index) in books.slice().reverse()"
      :key="2017 + books.length - 1 - index"
      :year="2017 + books.length - 1 - index"
      :bookCount="'(' + booksList.length + '/52)'"
      :books="booksList"
      :apiKey="apiKey"
      :initialShowBooks="index == 0"
    />
    <!-- <BookSection
      :year="'2021'"
      :bookCount="'(' + bookNames2021.length + '/52)'"
      :books="bookNames2021"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2020'"
      :bookCount="'(' + bookNames2020.length + '/52)'"
      :books="bookNames2020"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2019'"
      :bookCount="'(' + bookNames2019.length + '/52)'"
      :books="bookNames2019"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2018'"
      :bookCount="'(' + bookNames2018.length + '/52)'"
      :books="bookNames2018"
      :apiKey="apiKey"
    />
    <BookSection
      :year="'2017'"
      :bookCount="'(' + bookNames2017.length + '/52)'"
      :books="bookNames2017"
      :apiKey="apiKey"
    /> -->
  </div>
</template>

<script>
import BookSection from '../components/Books/BookSection.vue';
import bookList2023 from '../resources/books/bookList2023.txt';
import bookList2022 from '../resources/books/bookList2022.txt';
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
      books: [],
    };
  },
  components: {
    BookSection,
  },
  mounted() {
    this.books = [
      bookList2017.split('\n'),
      bookList2018.split('\n'),
      bookList2019.split('\n'),
      bookList2020.split('\n'),
      bookList2021.split('\n'),
      bookList2022.split('\n'),
      bookList2023.split('\n'),
    ];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books-container {
  text-align: center;
  background-color: hsl(202, 20%, 92%);
  width: 100%;
  padding-top: 10px;
  margin-bottom: 100px;
  min-width: 100px;
}

.subtext, .subtext a {
  color: hsl(212, 51%, 31%);
}

p.subtext {
  margin-top: -10px;
  margin-bottom: 30px;
}
</style>
