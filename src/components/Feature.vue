<script setup>
const props = defineProps({
    title: String,
    desc: String
})
</script>

<template>
    <div class="flex-row bg-white p-3 rounded-md w-80">
        <div class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h1 class="font-urbanist text-xl text-title">{{ title }}</h1>
        </div>
        <div>
            <p class="font-urbanist text-title">{{ desc }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>