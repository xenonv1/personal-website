<template>
  <div class="flex items-center h-[10vh] max-md:h-[15vh]">
    <div
      class="w-[5%] text-xl italic flex flex-col items-center max-md:text-sm max-md:min-w-[15%] xl:text-base"
    >
      <div>{{ data.from }}</div>
      <div>-</div>
      <div>{{ data.to }}</div>
    </div>
    <div class="w-1 max-w-[1px] h-full bg-main-text"></div>
    <div class="pl-8 max-md:pl-3 xl:pl-6">
      <div class="flex items-baseline flex-wrap">
        <p
          class="text-3xl mb-3 font-accent-font text-accent-text pr-[1rem] max-md:text-base xl:text-xl"
        >
          {{ data.school }}
        </p>
        <p class="text-2xl max-md:text-base xl:text-lg">{{ data.location }}</p>
      </div>
      <p class="text-2xl italic max-md:text-base xl:text-lg">{{ data.degree }}</p>
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
