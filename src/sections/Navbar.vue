<script setup>

</script>

<template>
    <nav class="flex justify-between p-5">
        <div class="ml-20 items-center">
            <img src="../assets/logo.jpg" alt="" width="80">
        </div>
        <div class="flex items-center space-x-6 mr-32">
            <ul class="flex space-x-12 text-lg">
                <RouterLink to="/" class="hover:text-title hover:cursor-pointer font-urbanist">Home</RouterLink>
                <RouterLink to="/about" class="hover:text-title hover:cursor-pointer font-urbanist">About Us</RouterLink>
                <RouterLink to="/solutions" class="hover:text-title hover:cursor-pointer font-urbanist">Solutions</RouterLink>
                <RouterLink to="/contact" class="hover:text-title hover:cursor-pointer font-urbanist">Contact Us
                </RouterLink>
            </ul>
        </div>
</nav></template>
