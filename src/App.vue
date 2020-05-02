<template lang="pug">
  v-app
    v-app-bar(app, color='grey darken-3', dark).justify-center
      .d-flex.align-center.justify-center(style="width:100%")
        .headline Truth or Dare or Dice
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
