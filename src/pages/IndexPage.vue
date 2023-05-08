<script setup lang="ts">

import { onMounted, reactive } from '@vue/runtime-core';
import { Book } from '../models/IndexPage';
import { useRouter } from 'vue-router';
import books from '../assets/books';

const router = useRouter();

const state = reactive({
    books,
    copyOfBooks: [] as Book[],
    search: '',
    sorting: 'title',
    sortingOptions: [
        { label: 'Autor', value: 'author' },
        { label: 'Precio', value: 'price' },
        { label: 'Puntuación', value: 'puntuation' },
        { label: 'Título', value: 'title' }
    ]
})

const sort = () => {
    state.books = state.copyOfBooks.sort((a: any, b: any) => {
        if (a[state.sorting] < b[state.sorting])
            return state.sorting === 'puntuation' ? 1 : -1;
        if (a[state.sorting] > b[state.sorting])
            return state.sorting === 'puntuation' ? -1 : 1;
        return 0;
    });
}

const clearSort = () => {
    state.sorting = ''
    state.books = state.copyOfBooks
}

const search = () => {
    if (state.search === '')
        state.books = state.copyOfBooks
    else
        state.books = state.books.filter((book: Book) => {
            let title = book.title.toLowerCase()
            let author = book.author.toLowerCase()
            let tags = book.tags.join(' ').toLowerCase()
            let search = state.search.toLowerCase()

            return title.includes(search) || author.includes(search) || tags.includes(search)
        })
}

const clearSeach = () => {
    state.search = ''
    state.books = state.copyOfBooks
}

const goToBook = (book: Book) => {
    router.push('/book/' + book.id)
}

onMounted(() => {
    state.copyOfBooks = state.books
    sort()
})

</script>

<template>
    <q-page>
        <section class="header q-py-md">
            <div class="text-h4 text-bold text-primary title">Nuestra selección para ti</div>
            <div class="sorting">
                <q-select v-model="state.sorting" filled dense clearable emit-value map-options @update:model-value="sort" @clear="clearSort"
                    :options="state.sortingOptions" label="Ordenar por" />
            </div>
            <div class="search-bar">
                <q-input v-model="state.search" filled dense clearable label="Buscar" @update:model-value="search" @clear="clearSeach">
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </section>

        <section class="books cards">
            <q-card v-for="book in state.books" :key="book.id" class="card" flat @click="goToBook(book)">
                <div class="text-center text-white absolute-top book-title">{{ book.title }}</div>
                <img :src="require(`../assets/covers/${book.cover}`)" />
                <div class="author" style="opacity: 0.4;"><span class="text-bold">Escrito por:</span> {{ book.author }}
                </div>

                <div class="tags q-my-xs">
                    <q-chip v-for="tag in book.tags" :key="tag" class="q-mr-sm" color="primary" text-color="white" dense>{{ tag }}</q-chip>
                </div>

                <div class="text-bold">Puntuación</div>
                <q-rating v-model="book.puntuation" readonly icon="book" color="warning" size="sm" />

                <div class="absolute-bottom-right text-white text-right price">$ {{ book.price }} MXN</div>
            </q-card>
        </section>

    </q-page>
</template>

<style lang="sass" scoped>
.header
    display: grid
    grid-template-columns: 1fr 0.5fr 1fr
    grid-gap: 1rem
    align-items: center

.cards
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
    grid-gap: 0.5rem

    .card
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        padding: 1rem 0.5rem
        border: 1px solid #ccc
        border-radius: 5px

        .book-title
            background-color: rgba($primary, 0.8)
            font-size: 1.1rem
            line-height: 1.15rem
            padding: 0.5rem 1rem

        img
            width: 200px
            height: 270px
            object-fit: cover
            margin-top: 0.5rem

        .price
            background-color: rgba($primary, 0.8)
            font-size: 0.9rem
            border-radius: 0
            bottom: 7.45rem
            padding: 0.35rem

        &:hover
            transition: all 0.5s ease-in-out
            box-shadow: 0 0 10px $primary
            transform: scale(1.05)
            background-color: #f5f5f5
            cursor: pointer

</style>
