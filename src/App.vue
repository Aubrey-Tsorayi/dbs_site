<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './sections/Navbar.vue';
import Footer from './sections/Footer.vue';

</script>

<template>
  <Navbar/>
  <RouterView />
  <Footer/>
</template>
