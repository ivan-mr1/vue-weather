<template>
  <div class="about flex min-h-screen items-center justify-center bg-cover bg-center p-5">
    <div
      class="max-w-xl rounded-3xl border border-white/10 bg-black/60 p-8 text-center text-white backdrop-blur-sm"
    >
      <h2 class="mb-6 text-3xl font-bold">About Mini Weather</h2>

      <div class="space-y-4 text-lg leading-relaxed opacity-90">
        <p>
          <strong class="text-[#42b883]">Mini Weather</strong> is a web application
          designed to provide instant weather updates.
        </p>

        <p>
          The app uses the OpenWeather API to deliver accurate information, focusing on simplicity
          and speed.
        </p>

        <p>
          Built with <strong class="text-[#42b883]">Vue.js 3</strong>,
          <strong class="text-[#42b883]">Axios</strong>, and
          <strong class="text-[#42b883]">Pinia</strong>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-image: url('@/assets/about.webp');
}
</style>
