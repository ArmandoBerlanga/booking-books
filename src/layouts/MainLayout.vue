<script setup lang="ts">
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar class="q-px-md">
                <q-toolbar-title id="business">
                    <img src="~assets/icon.png" alt="icon of the page" style="width: 30px;" />
                    <span>Booking Books</span>
                </q-toolbar-title>

                <nav id="nav">
                    <q-btn flat label="Inicio" to="/" />
                    <q-btn flat label="Contacto" to="/contacto" />
                    <q-btn flat label="FAQ" to="/faq" />
                    <q-btn flat label="Nosotros" to="/nosotros" />
                    <q-btn label="Login" to="/login" color="secondary" text-color="primary" />
                </nav>
            </q-toolbar>
        </q-header>

        <q-page-container class="q-pa-md">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<style lang="sass" scoped>
#business
    display: flex
    align-items: center

    img
        margin-right: 10px
</style>
