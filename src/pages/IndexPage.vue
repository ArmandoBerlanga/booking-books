<script setup lang="ts">

import { onMounted, reactive } from '@vue/runtime-core';
import { Book } from '../models/IndexPage';
import { useRouter } from 'vue-router';

const router = useRouter();

const books: Book[] = [
    {
        id: 1,
        title: 'The Cat in the Hat',
        cover: 'cover1.jpeg',
        puntuation: 4.5,
        author: 'Dr. Seuss',
        tags: ['children', 'funny'],
        price: 230.99
    },
    {
        id: 2,
        title: 'Moon',
        cover: 'cover2.jpeg',
        puntuation: 5,
        author: 'Oliver Jeffers',
        tags: ['infantil', 'risa'],
        price: 312.99
    },
    {
        id: 3,
        title: 'The Girl in Red',
        cover: 'cover3.jpeg',
        puntuation: 4,
        author: 'Christina Henry',
        tags: ['horror', 'thriller'],
        price: 224.99
    },
    {
        id: 4,
        title: 'The arsonist',
        cover: 'cover4.jpeg',
        puntuation: 4.5,
        author: 'Stephanie Oakes',
        tags: ['horror', 'thriller'],
        price: 399.99
    },
    {
        id: 5,
        title: 'Harry Potter and the Goblet of Fire',
        cover: 'cover5.jpg',
        puntuation: 4.5,
        author: 'J.K. Rowling',
        tags: ['infanitl', 'sci-fi'],
        price: 299.99
    },
    {
        id: 6,
        title: 'A short history of Biology',
        cover: 'cover6.jpg',
        puntuation: 3.5,
        author: 'John Gribbin',
        tags: ['ciencia', 'historia'],
        price: 418.99
    },
    {
        id: 7,
        title: 'Biology Student book',
        cover: 'cover7.jpg',
        puntuation: 2.5,
        author: 'David Brooker',
        tags: ['ciencia', 'historia'],
        price: 189.50
    },
    {
        id: 8,
        title: 'The Invisible Cloud',
        cover: 'cover8.png',
        puntuation: 4.5,
        author: 'Adam Rutherford',
        tags: ['tecnologia'],
        price: 419.99
    },
    {
        id: 9,
        title: 'Español Libro de Lectura',
        cover: 'cover9.png',
        puntuation: 1.5,
        author: 'Luisa Fernanda',
        tags: ['español', 'lectura'],
        price: 249.99
    },
    {
        id: 10,
        title: 'Econocmics Student Book',
        cover: 'cover10.jpg',
        puntuation: 5,
        author: 'Matthew Taylor',
        tags: ['economia', 'negocios'],
        price: 399.99
    }
]

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
