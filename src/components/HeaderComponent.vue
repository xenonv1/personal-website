<template>
  <header
    id="home"
    class="h-[5vh] w-[100%] bg-background-color flex items-center justify-between p-8 sticky top-0 max-md:flex-col max-md:h-[12vh]"
  >
    <a href="#" class="font-bold text-xl max-md:text-lg 2xl:text-3xl"
      >Niklas Borresch</a
    >
    <nav
      class="flex gap-16 font-light text-lg font-accent-font max-md:text-base max-md:gap-4 2xl:text-xl"
    >
      <a href="#about" class="hover:underline">.about</a>
      <a href="#education" class="hover:underline">.education</a>
      <a href="#skills" class="hover:underline">.skills</a>
      <a href="#projects" class="hover:underline">.projects</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
