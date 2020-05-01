<template lang="pug">
  v-app
    v-app-bar(app, color='primary', dark)
      .d-flex.align-center
        v-img.shrink.mr-2(alt='Vuetify Logo', contain, src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png', transition='scale-transition', width='40')
          v-img.shrink.mt-1.hidden-sm-and-down(alt='Vuetify Name', contain, min-width='100', src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png', width='100').
            
            
      v-spacer
      v-btn(href='https://github.com/vuetifyjs/vuetify/releases/latest', target='_blank', text)
        span.mr-2 Latest Release
        v-icon mdi-open-in-new
    v-content
      router-view 
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import GameSetup from "./views/GameSetup.vue";
import { TruthOrDareData } from "./types/types";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    GameSetup,
  },
  created() {
    this.getGameData();
  },
  methods: {
    async getGameData() {
      const gameData = {
        truths: await this.getAndParse("data/Truths.txt"),
        daresSafe: await this.getAndParse("data/Dares.txt"),
        daresSexy: await this.getAndParse("data/DaresSexy.txt"),
        daresHot: await this.getAndParse("data/DaresHot.txt"),
        dicePlace: await this.getAndParse("data/DicePlace.txt"),
        diceAction: await this.getAndParse("data/DiceAction.txt"),
      } as TruthOrDareData;
      console.log(gameData);
      this.$store.dispatch("setGameData", gameData);
    },
    async getAndParse(url: string) {
      const fResponse = await fetch(url);
      const fData = await fResponse.text().then((data) => {
        return data.split("\n");
      });
      return fData;
    },
  },
});
</script>
