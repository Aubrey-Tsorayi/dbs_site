<script setup>
import AboutItem from '@/components/AboutItem.vue';

const abouts = [
  {
    title: 'Our Mission',
    desc: 'At DBSolutions, our mission is to recognize the IT landscape by providing cutting -edge solutions that drive success, foster innovation and ensure client satisfaction.'
  },
  {
    title: 'Our Vision',
    desc: 'Anticipating and meeting evolving business needs globally, making sure DBSolutions leads in transformative IT solutions.'
  },
  {
    title: 'Our Values',
    desc: 'Client Centric.\n Integrity.\n Adaptability.\n Collaboration.\n Communication.'
  }
]
</script>

<template>
  <div class="flex-row min-h-max">
    <div class="pt-5 pl-5 ml-20">
      <h1 class="text-3xl font-urbanist text-title">Who is DBSolutions?</h1>
    </div>
    <div class="p-5 ml-20 mr-32">
      <p class="font-urbanist text-title">DBSolutions is a private IT company that was established in 2023 and it helps businesses by offering tailored solutions. DBSolutions uses the latest technologies to build strong and flexible IT systems and it covers areas like UI/UX designing, web designing, managing data, and creating software.
DBSolutions cares a lot about their clients and work closely with businesses to make personalized IT plans that make operations smoother and help them go digital. The team at DBSolutions is skilled and works hard to do a great job in everything IT-related.</p>
    </div>
    <div class="flex justify-center gap-10 p-5">
      <AboutItem v-for="about in abouts" :key="about.title" :title="about.title" :desc="about.desc"/>
    </div>
  </div>
</template>

<style>
</style>
