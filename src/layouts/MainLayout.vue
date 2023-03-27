<script setup lang="ts">
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar>
                <q-toolbar-title>
                    Booking Books
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

</style>
