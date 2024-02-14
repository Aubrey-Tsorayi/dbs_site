<script setup>
import Feature from '@/components/Feature.vue';

const features = [
  {
    title: 'Customized Solutions',
    desc: 'Tailored solutions that meet your needs.'
  },
  {
    title: 'Scalabilty',
    desc: 'Ensuring your business effortlessly grows.'
  },
  {
    title: 'Cost-effectiveness',
    desc: 'Efficient when it come to costs.'
  },
  {
    title: '24/7 Technical Support',
    desc: 'Assistance for all your IT-related queries and issues.'
  }
]

</script>

<template>
  <main class="flex-row">
    <div class="flex-row">
      <div class="flex justify-center mt-28">
        <h1 class="font-urbanist text-4xl text-title text-center">Welcome to DBSolutions</h1>
      </div>
      <div class="flex justify-center pt-14">
        <p class="font-urbanist tex-sm ">Your IT solutions partner!</p>
      </div>
    </div>
    <div class="bg-blue flex-row mt-20">
      <div class="flex justify-center pt-5">
        <h1 class="font-urbanist text-2xl">Our Key Features</h1>
      </div>
      <div class="flex justify-center pt-2">
        <p class="font-urbanist text-sm">Transform your infrastruce with DBSolutions</p>
      </div>
      <div class="flex justify-center">
        <div class="space-y-5  lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 w-fit p-5">
          <Feature v-for="feature in features" :key="feature.title" :title="feature.title" :desc="feature.desc" />
        </div>
      </div>
    </div>
  </main>
</template>