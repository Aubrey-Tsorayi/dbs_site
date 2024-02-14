<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>
    <nav class="flex justify-between p-5">
        <div class=" items-center">
            <img src="../assets/logo.jpg" alt="" width="80">
        </div>
        <div class="flex items-center space-x-6">
            <!-- Hamburger Icon for Small and Medium Screens -->
            <div class="lg:hidden">
                <button @click="toggleMenu" class="text-title hover:text-title hover:cursor-pointer">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>
            </div>
            <!-- Regular Navigation Links for Large Screens -->
            <ul class="hidden lg:flex space-x-12 text-lg">
                <RouterLink to="/" class="hover:text-title hover:cursor-pointer font-urbanist">Home</RouterLink>
                <RouterLink to="/about" class="hover:text-title hover:cursor-pointer font-urbanist">About Us</RouterLink>
                <RouterLink to="/solutions" class="hover:text-title hover:cursor-pointer font-urbanist">Solutions
                </RouterLink>
                <RouterLink to="/contact" class="hover:text-title hover:cursor-pointer font-urbanist">Contact Us
                </RouterLink>
            </ul>
        </div>
        <!-- Responsive Menu (Shown on Small and Medium Screens) -->
        <div v-if="isMenuOpen" class="lg:hidden absolute top-0 left-0 w-full h-full bg-white">
            <ul class="flex flex-col items-center space-y-6 pt-20">
                <RouterLink @click.native="closeMenu" to="/" class="hover:text-title hover:cursor-pointer font-urbanist">
                    Home</RouterLink>
                <RouterLink @click.native="closeMenu" to="/about"
                    class="hover:text-title hover:cursor-pointer font-urbanist">About Us</RouterLink>
                <RouterLink @click.native="closeMenu" to="/solutions"
                    class="hover:text-title hover:cursor-pointer font-urbanist">Solutions</RouterLink>
                <RouterLink @click.native="closeMenu" to="/contact"
                    class="hover:text-title hover:cursor-pointer font-urbanist">Contact Us</RouterLink>
            </ul>
        </div>
    </nav>
</template>
