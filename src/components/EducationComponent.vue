<template>
  <div class="w-[80%] m-auto mb-[10vh] 3xl:max-w-[40%]">
    <h1
      class="text-3xl font-accent-font text-accent-text pb-[3rem] max-md:text-3xl 2xl:text-5xl"
    >
      Education
    </h1>
    <p class="leading-relaxed text-xl pb-[4rem] max-md:text-xl 2xl:text-3xl">
      In 2017, I started a bachelor's program in Information Management at the
      University of Applied Sciences Kaiserslautern, which I finished with the
      <span class="font-accent-font text-accent-text">bachelor of science</span
      >. In 2022 I continued this degree by starting the
      <span class="font-accent-font text-accent-text"
        >consecutive master's degree</span
      >.
    </p>
    <EducationDetails v-for="item in education" :data="item" />
    <p class="text-xl pt-[4rem] pb-[2rem] max-md:text-xl 2xl:text-3xl">
      My work experience:
    </p>
    <WorkDetails v-for="item in work" :data="item" />
  </div>
</template>

<script>
import EducationDetails from "../components/EducationDetailsComponent.vue";
import WorkDetails from "../components/WorkComponent.vue";
export default {
  name: "EducationComponent",
  components: {
    EducationDetails,
    WorkDetails,
  },
  data() {
    return {
      education: [
        {
          from: "2022",
          to: "today",
          school: "University of Applied Sciences",
          location: "Kaiserslautern / Zweibrücken",
          degree: "M.Sc. Information Management",
        },
        {
          from: "2017",
          to: "2022",
          school: "University of Applied Sciences",
          location: "Kaiserslautern / Zweibrücken",
          degree: "B.Sc. Information Management",
        },
        {
          from: "2015",
          to: "2017",
          school: "Paul-Weber-Schule, Homburg",
          location: "Homburg",
          degree: "Technical college entrance qualification",
        },
      ],
      work: [
        {
          from: "02.10.2022",
          to: "today",
          company: "prego services GmbH",
          type: "Working student Software Development",
        },
        {
          from: "01.2022",
          to: "04.2022",
          company: "ORTEC GmbH",
          type: "Working student",
        },
        {
          from: "04.2021",
          to: "08.2021",
          company: "ORTEC GmbH",
          type: "Internship",
        },
      ],
    };
  },
};
</script>
