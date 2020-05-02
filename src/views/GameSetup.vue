/* eslint-disable @typescript-eslint/no-explicit-any */
<template lang="pug">
    div
      v-container
        v-row.flex-column.ma-0.fill-height
          v-col
            v-card
              v-row.fill-height
                v-col.flex-grow-1
                  v-card-title(grow)
                    .headline Players
                  v-card-subtitle Who's playing? ({{players.length}} in game)
                v-col.flex-grow-0.align-center
                  v-btn.mx-2(fab dark large color="grey darken-2" @click="confPlayers=!confPlayers")
                    v-icon {{ confPlayers ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              v-expand-transition
                div(v-show="confPlayers")
                  v-card-text Add, Edit or Remove Players
                  v-simple-table
                    tbody
                      tr(v-for="player in players" :key="player.id")
                        td.flex-grow-1
                          v-text-field(label="Name" v-model="player.name" autofocus)
                          //- input(type="text" label="Name" v-model="player.value")
                        td.flex-grow-0
                          v-btn.mx-2.text-right(fab dark small color="gray" @click="removePlayer(player.id)")
                            v-icon mdi-minus
                    v-btn.mx-2.text-right(fab dark color="gray" @click="addPlayer()")
                        v-icon mdi-plus   
            
          //- v-divider
          v-col
            v-card 
              v-row.fill-height
                v-col.flex-grow-accent-1
                  v-card-title.headline Game Settings
                  v-card-subtitle Difficutly and Game length
                v-col.flex-grow-0.align-content-center
                  v-btn.mx-2(fab dark large color="grey darken-2" @click="confGame=!confGame")
                    v-icon {{ confGame ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              v-expand-transition
                div#config(v-show="confGame")
                  v-row
                    v-col.text-center(xs="3" sm="2")
                      .title Difficutly
                      .subtitle-2 {{difficultyText[difficulty]}}
                    v-col(xs="9" sm="10")
                      v-slider(v-model="difficulty" min="0" max="3" ticks="always" tick-size="4" step="1")

                  v-row
                    v-col.text-center(xs="3" sm="2")
                      .headline Truns
                      .subtitle-2 {{turns}}
                    v-col(xs="9" sm="10")
                      v-slider(v-model="turns" min="5" max="100")
          v-col(align-center justify-center)
            v-row
              v-col(cols="5")
              v-col(cols="2")
                v-btn.mx-2(raised large color="primary" :disabled="!validNames" @click="beginGame()") Begin Game
              v-col(cols="5")


</template>
<script lang="ts">
import Vue from "vue";
import { Player, GameSetup } from "../types/types";
export default Vue.extend({
  name: "GameSetup",
  data() {
    return {
      players: [] as Array<Player>,
      difficulty: 0,
      turns: 0,
      confPlayers: true,
      confGame: false,
      difficultyText: [
        "Normal / Safe",
        "Sexy (NSFW Warning)",
        "Hot (NSFW)",
        "Progressive (NSFW)",
      ],
    };
  },
  computed: {
    validNames(): boolean {
      let valid = false;
      if (this.players.length > 1) {
        valid = true;
        this.players.forEach((p) => {
          if (this.isEmptyOrWhiteSpace(p.name)) {
            valid = false;
          }
        });
      }
      return valid;
    },
  },
  methods: {
    isEmptyOrWhiteSpace(input: string) {
      return input.replace(/\s/g, "").length > 0 ? false : true;
    },
    addPlayer(name = "") {
      this.players.push({ id: this.players.length, name: name, score: 0 });
    },
    removePlayer(player: number) {
      this.players.splice(
        this.players.indexOf(this.players.filter((p) => p.id == player)[0]),
        1
      );
    },
    beginGame() {
      const setup = {} as GameSetup;
      setup.players = this.players;
      setup.turns = this.turns;
      setup.difficulty = this.difficulty;
      this.$store.dispatch("setupGame", setup);
      this.$router.push("/Game");
    },
  },
});
</script>
<style lang="scss" scoped>
#config {
  .v-card__subtitle,
  .v-card__text,
  .v-card__title {
    padding: 2px;
  }
  .row {
    margin: 3px;
  }
}
.v-card {
  margin: 10px 0;
}
</style>
