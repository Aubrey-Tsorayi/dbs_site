<script setup>
import EmailCard from '@/components/EmailCard.vue';
import Form from '../components/Form.vue'
import WhatsappCard from '@/components/WhatsappCard.vue';

const emails = [
    {
        title: 'dtbasikoro@gmail.com',
        email: 'dtbasikoro@gmail.com'
    },
    {
        title: 'aubreytsorayi@yahoo.com',
        email: 'aubreytsorayi@yahoo.com'
    }
]
const phones = [
    {
        title: 'Dylan Basikoro',
        whatsapp: 'https://wa.me/263772209257',
    },
    {
        title: 'Aubrey Tsorayi',
        whatsapp: 'https://wa.me/263774273747',
    }
]
</script>

<template>
    <div class="font-urbanist text-title">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center ml-4 sm:ml-20">
        <div class="flex flex-wrap space-y-5 p-4 justify-center lg:grid lg:grid-cols-2">
            <EmailCard v-for="email in emails" :key="email.title" :title="email.title" :email="email.email" class="hover:scale-105"/>
            <WhatsappCard v-for="phone in phones" :key="phone.title" :title="phone.title" :whatsapp="phone.whatsapp" class="hover:scale-105"/>
        </div>
        <div>
            <Form/>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped></style>