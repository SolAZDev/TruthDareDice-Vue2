<template lang="pug">
    v-container
        v-card.text-center
            v-card-title.headline {{ActivePlayer}}


</template>
<script lang="ts">
import Vue from "vue";
import { Player } from "../types/types";
export default Vue.extend({
  data() {
    return {
      // activePlayer: {} as Player,
      maxTurn: 0,
      activeTurn: 0,
      activePlayer: 0,
      playerCount: 0,
      difficulty: 0,
      truths: [] as Array<string>,
      dares1: [] as Array<string>,
      dares2: [] as Array<string>,
      dares3: [] as Array<string>,
      //   dares: [] as Array<string>,
    };
  },
  created() {
    this.maxTurn = this.$store.getters.getTurns;
    this.playerCount = this.$store.getters.getPlayerCount;
    this.difficulty = this.$store.getters.getDifficulty;
    this.getDares();
  },
  computed: {
    playerName(): string {
      return this.$store.getters.getPlayer(this.activePlayer);
    },
  },
  methods: {
    async getDares() {
      console.log(await fetch("data/Truths.txt"));
    },
  },
});
</script>
