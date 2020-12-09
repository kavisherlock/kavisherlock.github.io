<template>
  <div class="content">
    <h2 class="subtext">Yearly Target: 52 Books</h2>
    <p class="subtext">Blog: <a href="https://kavishandbooks.wordpress.com/" target="_blank">Kavish and Books</a></p>
    <BookSection
      :bookSectionTitle="'2020 (50/52)'"
      :books="bookNames2020"
      :apiKey="apiKey"
      :initialShowBooks="true"
    />
    <BookSection
      :bookSectionTitle="'2019 (46/52)'"
      :books="bookNames2019"
      :apiKey="apiKey"
    />
    <BookSection
      :bookSectionTitle="'2018 (57/52)'"
      :books="bookNames2018"
      :apiKey="apiKey"
    />
    <BookSection
      :bookSectionTitle="'2017 (55/52)'"
      :books="bookNames2017"
      :apiKey="apiKey"
    />
  </div>
</template>

<script>
import BookSection from '../components/Books/BookSection.vue';
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
    this.bookNames2020 = bookList2020.split('\n');
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
  min-width: 100px;
}

.subtext, .subtext a {
  color: rgb(19, 37, 53);
}
</style>
