<script setup lang="ts">
import { Book } from '../models/IndexPage';
import books from '../assets/books';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const bookID = parseInt(route.params.id as string);

const state = reactive({
    currentBook: books.find((book: Book) => book.id === bookID)
})
</script>

<template>
    <q-page id="book">
        {{ state.currentBook }}
    </q-page>
</template>

<style lang="sass" scoped>

</style>
