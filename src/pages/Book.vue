<script setup lang="ts">
import { Book } from '../models/IndexPage';
import books from '../assets/books';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const bookID = parseInt(route.params.id as string);
const sellers = Math.floor(Math.random() * 12) + 1;
const condition = Math.random() > 0.5 ? 'Como nuevo' : 'Con apuntes';

const state = reactive({
    currentBook: books.find((book: Book) => book.id === bookID) as Book
})
</script>

<template>
    <q-page id="book" class="flex flex-center">
        <q-card class="card">
            <section class="left">
                <img :src="require(`../assets/covers/${state.currentBook?.cover}`)" />

                <div class="validation">
                    <div class="tags q-my-xs">
                        <q-chip v-for="tag in state.currentBook.tags" :key="tag" size="lg" color="primary" class="q-px-md"
                            text-color="white" dense>{{ tag }}</q-chip>
                    </div>

                    <div class="text-bold text-h6">Puntuación</div>
                    <q-rating v-model="state.currentBook.puntuation" readonly icon="book" color="warning" size="lg" />
                </div>
            </section>

            <q-separator vertical class="sep-center" />

            <section class="center">
                <div class="title text-h5">
                    <span class="text-bold">Título:</span> {{ state.currentBook.title }}
                </div>

                <div class="author text-h6 text-grey">
                    Escrito por: {{ state.currentBook.author }}
                </div>

                <q-separator class="q-my-lg" />

                <div class="description text-h6 ">
                    {{ state.currentBook.description }}
                </div>
            </section>

            <q-separator vertical class="sep-center" />

            <section class="right">
                <div class="precio text-h6">
                    <span class="text-bold">Precio</span>
                    <span>$ {{ state.currentBook.price }} MXN</span>
                </div>

                <div class="sellers text-h6 text-grey q-my-md">
                    <span class="text-bold">Vendido por:</span> {{ sellers }} vendedores
                </div>

                <div class="condition text-h6">
                    <span class="text-bold">Condición: </span>
                    <span class="text-primary">{{ condition }}</span>

                </div>

                <q-separator class="q-my-lg" />

                <q-btn color="primary" label="Comprar Ahora" class="full-width" />
                <q-btn color="grey" label="Regresar" class="q-mt-sm full-width" @click="$router.go(-1)"/>

            </section>
        </q-card>
    </q-page>
</template>

<style lang="sass" scoped>

.sep-center
    height: 100%
    margin: 0 1.5rem

.card
    display: grid
    grid-template-columns: auto auto auto auto auto
    align-items: center
    justify-content: center
    padding: 3rem
    border: 1px solid #ccc
    border-radius: 5px
    width: 70vw


    .left
        img
            width: 300px
            height: 450px
            object-fit: cover

        .validation
            display: grid
            place-items: center


    .right
        text-align: right
        .precio
            display: flex
            flex-direction: column

</style>
