<template>
  <div class="flex items-center h-[10vh] max-md:h-[15vh]">
    <div
      class="w-[5%] text-base italic flex flex-col items-center max-md:text-sm max-md:min-w-[15%] max-lg:min-w-[10%] 2xl:text-xl"
    >
      <div>{{ data.from }}</div>
      <div>-</div>
      <div>{{ data.to }}</div>
    </div>
    <div class="w-1 max-w-[1px] h-full bg-main-text"></div>
    <div class="pl-6 max-md:pl-3 max-lg:pl-4 2xl:pl-8">
      <div class="flex items-baseline flex-wrap">
        <p
          class="text-2xl mb-3 font-accent-font text-accent-text pr-[1rem] max-md:text-base 2xl:text-3xl"
        >
          {{ data.school }}
        </p>
        <p class="text-lg max-md:text-base 2xl:text-2xl">
          {{ data.location }}
        </p>
      </div>
      <p class="text-lg italic max-md:text-base 2xl:text-2xl">
        {{ data.degree }}
      </p>
    </div>
  </div>
  <div class="h-1"></div>
</template>

<script>
export default {
  name: "EducationDetailsComponent",
  props: {
    data: Object,
  },
};
</script>
