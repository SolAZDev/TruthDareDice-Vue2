<template lang="pug">
    v-container(fill-height fluid)
        v-row(v-if="ready").align-start.grow-1
            v-col(cols="12")    
                v-card.text-center
                    v-row.text-center
                        v-col(cols="12")
                            //- .headline {{playerName}}
                        v-col(cols="12")
                            .headline(v-html="todRequest") {{todRequest}}
            //- v-spacer
        v-row.justify-center
            v-col(cols="12")
                v-row.justify-center
                    v-col.text-center
                        v-btn(raised large color="primary"  @click="getTruth()") Truth
                    v-col.text-center
                        v-btn(raised large color="primary" :disabled="difficulty>0" @click="rollDice()") Dice
                    v-col.text-center
                        v-btn(raised large color="primary"  @click="getDare()") Dare
            v-col(cols="12")
                v-row
                    v-col(cols="3")
                    v-col(cols="2").text-center
                        v-btn(raised large color="primary" :disabled="!canContinue" @click="decline()") Decline
                    v-col(cols="2")
                    v-col(cols="2").text-center
                        v-btn(raised large color="primary" :disabled="!canContinue" @click="accept()") Accept
                    v-col(cols="3")
        v-footer.full-width.align-end
</template>
<script lang="ts">
import Vue from "vue";
import { Player } from "../types/types";
import { mapGetters } from "vuex";
import * as Utils from "../plugins/utils";
export default Vue.extend({
  data() {
    return {
      // activePlayer: {} as Player,
      ready: false,
      canContinue: false,
      maxTurn: 0,
      activeTurn: 0,
      activePlayerData: {} as Player,
      activePlayer: -1,
      playerCount: 0,
      todRequest: "",
    };
  },
  created() {
    this.maxTurn = this.$store.getters.getTurns;
    this.playerCount = this.$store.getters.getPlayerCount;
    this.nextTurn();
  },
  computed: {
    playerName(): string {
      return this.$store.getters.getPlayer(this.activePlayer).name;
    },
    gameProgress(): number {
      return Math.round((100 * this.activeTurn) / this.maxTurn);
    },
    ...mapGetters({
      truths: "getTruthArray",
      players: "getPlayers",
      difficulty: "getDifficulty",
      dPlace: "getDiceArea",
      dAct: "getDiceAct",
    }),
  },
  methods: {
    getTruth() {
      this.todRequest = this.parseReplacements(
        this.truths[Utils.randomNumber(this.truths.length)]
      );
      this.canContinue = true;
    },
    getDare() {
      this.todRequest = this.parseReplacements(
        this.$store.getters.getDare(this.difficulty)
      );
      this.canContinue = true;
    },
    rollDice() {
      const place = this.dPlace[Utils.randomNumber(this.dPlace.length)];
      const act = this.dAct[Utils.randomNumber(this.dAct.length)];
      this.todRequest = this.parseReplacements("# " + act + " @'s " + place);
      this.canContinue = true;
    },
    randomPlayer(): Player {
      const id = Utils.randomAvoidNumber(
        this.players.length,
        this.activePlayer
      );
      const player = this.players[id];
      console.log(id + ":" + player);
      return player;
    },
    parseReplacements(str: string) {
      return str
        .replace(new RegExp("#", "ig"), "<b>" + this.playerName + "</b>")
        .replace(
          new RegExp("@", "ig"),
          "<b>" + this.randomPlayer().name + "</b>"
        )
        .replace(
          new RegExp("%", "g"),
          "<b>" +
          Math.round(Math.random() * (this.difficulty / 4) * 10) +
          "</b>"
        );
    },
    accept() {
      this.$store.dispatch("scoreUp", this.activePlayer);
      console.log("Accepted, point granted");
      this.nextTurn();
    },
    decline() {
      console.log("Declined");
      this.nextTurn();
    },
    nextTurn() {
      //ChangeDiff
      this.canContinue = false;
      this.activePlayer++;
      if (this.activePlayer > this.playerCount - 1) {
        this.activeTurn++;
        this.activePlayer = 0;
      }
      if (this.activeTurn > this.maxTurn) {
        this.endGame();
      }
      this.activePlayerData = this.$store.getters.getPlayer(this.activePlayer);
      this.todRequest = "Truth or Dare?";
      console.log(
        "Turn " + this.activeTurn + "Player: " + this.activePlayerData
      );

      this.ready = true;
    },
    endGame() {
      console.log("GAMEOVER");
      this.$router.push('/Results');
    },
    setDifficulty() {
      if (!this.$store.getters.getProgressive) {
        return;
      }
      let newDiff = this.$store.getters.getDifficulty;
      if (this.gameProgress < 20) {
        newDiff = 0;
      }
      if (this.gameProgress < 50) {
        newDiff = 1;
      }
      if (this.gameProgress < 100) {
        newDiff = 2;
      }
      this.$store.dispatch("setDifficulty", newDiff);
    },
  },
});
</script>
