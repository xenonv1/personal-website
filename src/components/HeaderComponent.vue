<template>
  <header
    id="home"
    class="h-[5vh] w-[100%] bg-background-color flex items-center justify-between p-8 sticky top-0 max-md:flex-col max-md:h-[12vh]"
  >
    <a href="home" class="font-bold text-3xl max-md:text-lg max-xl:text-xl"
      >Niklas Borresch</a
    >
    <nav
      class="flex gap-16 font-light text-xl font-accent-font max-md:text-base max-md:gap-4 max-xl:text-lg"
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
