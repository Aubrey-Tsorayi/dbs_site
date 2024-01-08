<script setup>
const props = defineProps({
    title: String,
    desc: String
})
</script>

<template>
    <div class="flex-row bg-item p-3 rounded-md w-60 h-64">
        <div class="flex justify-center">
            <h1 class="font-urbanist text-2xl text-title">{{ title }}</h1>
        </div>
        <div class="p-4">
            <p class="font-urbanist text-title">{{ desc }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>