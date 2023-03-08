<template>
  <div
    class="w-[70%] border border-main-text border-solid rounded-lg my-[1.5rem]"
  >
    <div
      v-html="data.icon"
      class="text-center text-4xl pt-[1rem] max-md:text-xl"
    ></div>
    <p
      v-html="data.description"
      class="p-[1.5rem] leading-relaxed text-2xl max-md:text-xl"
    ></p>
  </div>
</template>

<script>
export default {
  name: "HobbyComponent",
  props: {
    data: Object,
  },
};
</script>
