<template>
  <Header />
  <main class="min-h-screen bg-linear-to-b from-black/25 to-black/75 p-[25px]">
    <router-view />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

