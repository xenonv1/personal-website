<template>
  <div class="w-[80%] m-auto 3xl:max-w-[40%]">
    <h1
      class="text-5xl font-accent-font text-accent-text pb-[3rem] max-md:text-3xl xl:text-3xl"
    >
      Projects
    </h1>
    <div class="w-full flex flex-col items-center">
      <div class="w-[80%] relative max-md:w-full">
        <img
          :src="projects[counter].image"
          :alt="projects[counter].image_alt"
          class="w-full h-[40vh] rounded-lg max-md:h-[20vh] xl:h-[60vh]"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        />
        <div
          v-if="hover === true"
          class="w-full absolute top-0 left-0 bg-background-accent h-[50%] translate-y-[100%] rounded-b-lg flex flex-col justify-evenly p-[1rem]"
        >
          <p class="text-2xl font-accent-font text-accent-text xl:text-lg">
            {{ projects[counter].name }}
          </p>
          <p class="text-xl xl:text-sm">
            {{ projects[counter].description }}
          </p>
          <div class="flex">
            <div
              v-for="tag in projects[counter].tags"
              class="border border-main-text rounded-full p-[0.5rem] mr-[0.5rem] xl:text-sm xl:mt-2"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="showDetails === true">
        <p class="text-2xl font-accent-font text-accent-text my-[0.5rem]">
          {{ projects[counter].name }}
        </p>
        <p class="text-xl mb-[0.75rem]">{{ projects[counter].description }}</p>
        <div class="flex">
          <div
            v-for="tag in projects[counter].tags"
            class="border border-main-text rounded-full p-[0.5rem] mr-[0.5rem]"
          >
            {{ tag }}
          </div>
        </div>
      </div>
      <p
        v-if="showDetails === false"
        @click="showDetails = true"
        class="md:hidden underline p-4 cursor-pointer"
      >
        Find out more about this project.
      </p>
      <p
        v-else
        @click="showDetails = false"
        class="md:hidden underline p-4 cursor-pointer"
      >
        Show less information.
      </p>
      <div class="flex justify-evenly w-full py-[1rem]">
        <i
          @click="counter === 0 ? (counter = projects.length - 1) : counter--"
          class="fa-solid fa-arrow-left text-3xl hover:text-4xl cursor-pointer"
        ></i>
        <div class="flex">
          <div
            v-for="(item, index) in projects"
            class="m-[0.5rem] cursor-pointer"
          >
            <i
              @click="counter = index"
              v-if="counter !== index"
              class="fa-regular fa-circle"
            ></i>
            <i v-else class="fa-solid fa-circle"></i>
          </div>
        </div>
        <i
          @click="counter === projects.length - 1 ? (counter = 0) : counter++"
          class="fa-solid fa-arrow-right text-3xl hover:text-4xl cursor-pointer"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsComponent",
  data() {
    return {
      hover: false,
      showDetails: false,
      projects: [
        {
          name: "GameHQ",
          description:
            "A project during my master's program with a fellow student. Web application that gathers data for video games (web scraping of official stores / data from api's) and displays the data to the user.",
          tags: ["Vue.js", "Flask"],
          image: "/images/game-hq-project.jpg",
          image_alt: "gamehq_project_screenshot",
        },
        {
          name: "Shopping list application",
          description:
            "Shopping list web application for private use with custom ordering of items based on the layout of the supermarket. Items are stored in a Firestore cloud database.",
          tags: ["Vue.js", "Vanilla CSS", "Firebase"],
          image: "/images/shopping-list-project.jpg",
          imgage_alt: "shopping_list_project_screenshot",
        },
        {
          name: "Project for the bachelor's thesis",
          description:
            "Backend extension of a middleware to gather information about usage of several services at ORTEC GmbH.",
          tags: ["C#", "LiteDB"],
          image: "/images/ba-project.png",
          imgage_alt: "bachelors_thesis_project_image",
        },
        {
          name: "Implementation of a CI-/CD-Pipeline at ORTEC GmbH with a fellow student. (Proof of Concept)",
          description:
            "Conception and implementation of the CI-/CD-Pipeline for ORTEC GmbH to enable automated deploy to a Raspberry-Pi once a new commit in BitBucket exists. Deploying a Java-GUI and a shell-script to manage services on Raspberry Pi OS.",
          tags: ["TeamCity", "Octopus Deploy", "Bash"],
          image: "/images/psa-project.png",
          imgage_alt: "psa_project_image",
        },
      ],
      counter: 0,
    };
  },
};
</script>
