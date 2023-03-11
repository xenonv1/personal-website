<template>
  <!-- Media Scrren sizes: xl: laptop, md: mobile-->
  <Header />
  <Home id="home" />
  <About id="about" />
  <Education id="education" />
  <Skills id="skills" />
  <Projects id="projects" />
</template>

<script>
import Header from "../components/HeaderComponent.vue";
import Home from "../components/HomeComponent.vue";
import About from "../components/AboutComponent.vue";
import Education from "../components/EducationComponent.vue";
import Skills from "../components/SkillsComponent.vue";
import Projects from "../components/ProjectsComponent.vue";
export default {
  name: "MainView",
  components: {
    Header,
    Home,
    About,
    Education,
    Skills,
    Projects,
  },
};
</script>
