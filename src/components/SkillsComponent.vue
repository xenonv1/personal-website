<template>
  <div class="w-[80%] m-auto mb-[10vh] 3xl:max-w-[40%]">
    <h1
      class="text-3xl font-accent-font text-accent-text pb-[3rem] max-md:text-3xl 2xl:text-5xl"
    >
      Skills
    </h1>
    <div
      class="flex text-xl flex-wrap justify-center gap-20 max-md:text-xl max-md:gap-0 max-md:justify-start 2xl:text-3xl"
    >
      <div class="flex flex-col gap-4 mb-[2rem]">
        <p class="font-thin">technologies I already worked with</p>
        <p>HTML</p>
        <p>
          CSS
          <span class="text-base max-md:text-base 2xl:text-2xl"
            >(<span class="font-accent-font text-accent-text"
              >Vanilla, Tailwind</span
            >)</span
          >
        </p>
        <p>
          JavaScript
          <span class="text-base max-md:text-base 2xl :text-2xl"
            >(<span class="text-accent-text font-accent-font"
              >Vanilla, Vue.js, nodeJS(Express)</span
            >)</span
          >
        </p>
        <p>C# (.NET, Xamarin)</p>
        <p>
          Python
          <span class="text-base max-md:text-base 2xl:text-2xl"
            >(<span class="font-accent-font text-accent-text">Flask</span
            >)</span
          >
        </p>
        <p>Flutter</p>
        <p>Java</p>
        <P>SQL</P>
        <p>Git</p>
      </div>
      <div class="flex flex-col gap-4 mb-[2rem]">
        <p class="font-thin">tools I already worked with</p>
        <p>
          <span class="text-accent-text font-accent-font">Figma</span> and
          Balsamiq
        </p>
        <p>
          Repositories on
          <span class="font-accent-font text-accent-text">GitHub</span> and
          <span class="font-accent-font text-accent-text">BitBucket</span>
        </p>
        <p>CI-/CD-Tools (TeamCity, Octopus Deploy)</p>
      </div>
    </div>
    <p class="text-xl pb-[1rem] leading-relaxed max-md:text-xl 2xl:text-3xl">
      I am used to work on
      <span class="font-accent-font text-accent-text">Windows</span> and
      <span class="font-accent-font text-accent-text">macOS</span>.
    </p>
    <p class="text-xl pb-[1rem] leading-relaxed max-md:text-xl 2xl:text-3xl">
      Other technologies I would love to try out in the future are Typescript,
      Nuxt, React and React Native, aswell as other new upcoming, interesting
      web technologies.
    </p>
    <p class="text-xl leading-relaxed max-md:text-xl 2xl:text-3xl">
      Besides learning about new technologies I also want to further educate
      myself in UI/UX Design.
    </p>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
};
</script>
