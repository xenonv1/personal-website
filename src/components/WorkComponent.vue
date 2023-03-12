<template>
  <div class="py-4">
    <div class="flex text-xl pb-[0.5rem] max-md:text-lg 2xl:text-3xl">
      <p class="pr-[1rem] text-accent-text font-accent-font max-md:pr-[0.4rem]">
        {{ data.type }}
      </p>
      <p>at</p>
      <p class="pl-[1rem] text-accent-text font-accent-font max-md:pl-[0.4rem]">
        {{ data.company }}
      </p>
    </div>
    <div class="flex text-lg italic max-md:text-base 2xl:text-xl">
      <p class="pr-[1rem]">{{ data.from }}</p>
      <p>-</p>
      <p class="pl-[1rem]">{{ data.to }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkComponent",
  props: {
    data: Object,
  },
};
</script>
