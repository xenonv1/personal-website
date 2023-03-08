<template>
  <div class="w-[80%] m-auto 3xl:max-w-[40%]">
    <h1
      class="text-5xl font-accent-font text-accent-text pb-[3rem] max-md:text-3xl"
    >
      About me
    </h1>
    <p class="leading-relaxed text-3xl pb-[1rem] max-md:text-xl">
      Hi, I am Niklas Borresch from Germany. Currently, I am
      <span class="font-accent-font text-accent-text">24 years</span> old and
      live in the
      <span class="font-accent-font text-accent-text">Saarland</span>, next to
      the border to Rheinland-Pfalz.
    </p>
    <p class="text-3xl max-md:text-xl">
      If you want to find out more about me, check out my hobbies below.
    </p>
    <div class="grid grid-cols-2 mt-[2rem] mb-[10vh] max-md:grid-cols-1">
      <HobbyCard
        v-for="(hobby, index) in hobbies"
        :data="hobby"
        :class="{
          'col-span-2': checkForSpan(index),
          'max-w-[40%]': checkForSpan(index),
        }"
        class="justify-self-center max-md:col-span-1 max-md:w-full max-md:max-w-full"
      />
    </div>
  </div>
</template>

<script>
import HobbyCard from "./HobbyComponent.vue";
export default {
  name: "AboutComponent",
  components: {
    HobbyCard,
  },
  data() {
    return {
      hobbies: [
        {
          icon: "<i class='fa-solid fa-gamepad'></i>",
          description:
            "Since I was a child I loved to play video games. </br> Which started by playing offline games on a crappy computer accompanied by my younger brother lead to a huge passion of mine. </br> Today I am no longer limited to playing offline and made a lot of friends along the way. </br>In my opinion, my interest in programming also sparked because of my interest in video games and the technology behind it.",
        },
        {
          icon: "<i class='fa-solid fa-music'></i>",
          description:
            "I absolutely love to listen to and play music. </br> Whilst everbody has it's own taste of music, I prefer to listen to a lot of genres reaching from chill lo-fi beats to metalcore with my favourite bands being Linkin Park, Electric Callboy, Architects and Bring me the Horizon. </br> During the covid-19-pandemic I also started to teach myself to play the guitar to play along with a friend of mine from time to time.",
        },
        {
          icon: "<i class='fa-solid fa-dice'></i>",
          description:
            "Probably my biggest hobby is to play tabletop games, especially the fantasy tabletop role-playing game 'Dungeons and Dragons'. </br> I started playing the game about six years ago, with a few close friends and kept playing until today. Since then, I was part of nearly a dozen of adventures with lots of different people that I met along this way and I am sure, that I won't stop playing the game in the near future. </br> Aside from D&D I mainly play strategy board games like 'War of the Ring', a strategic board game, based on 'The Lord of the Rings'.",
        },
      ],
    };
  },
  methods: {
    checkForSpan(i) {
      let needsSpan = false;

      if (i === this.hobbies.length - 1)
        this.hobbies.length % 2 === 0
          ? (needsSpan = false)
          : (needsSpan = true);

      return needsSpan;
    },
  },
};
</script>
