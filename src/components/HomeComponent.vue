<template>
  <div
    class="h-[95vh] w-[80%] m-auto flex flex-col justify-center 3xl:max-w-[40%]"
  >
    <p
      class="font-light text-3xl pb-[2rem] font-accent-font text-accent-text max-md:text-lg"
    >
      Hi, my name is
    </p>
    <h1 class="text-7xl font-bold pb-[1rem] max-md:text-4xl">
      Niklas Borresch
    </h1>
    <h2 class="text-7xl pb-[4rem] max-md:text-4xl">
      Master's Student in Information Management
    </h2>

    <p class="text-3xl leading-relaxed pb-[1rem] max-md:text-lg">
      I am a
      <span class="font-accent-font text-accent-text">web developer</span>
      aswell as
      <span class="font-accent-font text-accent-text"
        >master's student in Information Management</span
      >
      at the University of Applied Sciences Kaiserslautern.
    </p>
    <p class="text-3xl leading-relaxed pb-[4rem] max-md:text-lg">
      I love to work with web technologies like
      <span class="font-accent-font text-accent-text">Vue.js</span> or
      <span class="font-accent-font text-accent-text">Tailwind</span> but I am
      also looking forward to learn and work with new things.
    </p>
    <div class="flex gap-10 text-6xl flex-wrap-column max-md:text-5xl">
      <a><i class="fa-brands fa-linkedin"></i></a>
      <a><i class="fa-brands fa-square-github"></i></a>
      <a><i class="fa-brands fa-codepen"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>
