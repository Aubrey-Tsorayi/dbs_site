<script setup>
const props = defineProps({
    name: String,
    img: String,
    role: String,
})

function getImgURl() {
    return new URL(`../assets/${props.img}`, import.meta.url)
}

</script>

<template>
    <div class="w-60 h-70 flex bg-blue rounded-lg relative group">
        <img :src="getImgURl()" class="w-50 h-70 rounded-md group-hover:opacity-30">
        <h1 class="absolute bottom-8 left-20 font-bold -translate-x-1/2 -translate-y-1/2 text-xl invisible group-hover:visible">{{ name }}</h1>
        <h2 class="absolute bottom-4 left-10 text-lg italic invisible group-hover:visible">{{ role }}</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>