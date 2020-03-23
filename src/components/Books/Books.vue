<template>
  <div class="content">
    <BookSection
      :bookSectionTitle="2020"
      :books="bookNames2020"
      :apiKey="apiKey"
      :initialShowBooks="true"
    />
    <BookSection
      :bookSectionTitle="2019"
      :books="bookNames2019"
      :apiKey="apiKey"
    />
    <BookSection
      :bookSectionTitle="2018"
      :books="bookNames2018"
      :apiKey="apiKey"
    />
    <BookSection
      :bookSectionTitle="2017"
      :books="bookNames2017"
      :apiKey="apiKey"
    />
  </div>
</template>

<script>
import BookSection from './BookSection.vue';
import bookList2020 from '../../resources/books/bookList2020.txt';
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
