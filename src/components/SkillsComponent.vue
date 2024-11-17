<template>
  <div class="w-[80%] m-auto mb-[10vh] 3xl:max-w-[40%]">
    <h1
      class="text-3xl font-accent-font text-accent-text pb-[3rem] max-md:text-3xl 2xl:text-5xl"
    >
      Skills
    </h1>
    <div
      class="flex text-xl flex-wrap justify-center gap-20 max-md:text-xl max-md:gap-0 max-md:justify-start md:max-xl:justify-start md:max-xl:gap-2 md:max-xl:w-[60%] md:max-xl:m-auto 2xl:text-3xl"
    >
      <div class="flex flex-col gap-4 mb-[2rem]">
        <p class="font-thin">technologies I already worked with</p>
        <p>ABAP</p>
        <p>ABAP OO</p>
        <p>CDS Views</p>
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
        <p>
          Python
          <span class="text-base max-md:text-base 2xl:text-2xl"
            >(<span class="font-accent-font text-accent-text"
              >Fast API, Langchain, RAGAs</span
            >)</span
          >
        </p>
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
          <span class="font-accent-font text-accent-text">GitLab</span>
        </p>
        <p>CI-/CD-Tools (TeamCity, Octopus Deploy)</p>
      </div>
    </div>
    <p class="text-xl pb-[1rem] leading-relaxed max-md:text-xl 2xl:text-3xl">
      I am used to work on
      <span class="font-accent-font text-accent-text">Windows</span> and
      <span class="font-accent-font text-accent-text">macOS</span>.
    </p>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
};
</script>
