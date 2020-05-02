
<template lang="pug">
    div
      v-container
        v-row.flex-column.ma-0.fill-height
          v-col
            v-card(raised)
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
                  //- v-text-field(label="Name" v-model="players" autofocus)
                  //- This is the new way but it's annoying at the moment. This will be renabled later
                  div(style="padding: 5px;")
                    div(style="padding: 5px;")
                      v-row(v-for="player in players" :key="player.id")
                        v-col.flex-grow-1
                          v-text-field(label="Name" v-model="player.name" autofocus)
                          //- input(type="text" label="Name" v-model="player.value")
                        v-col.flex-grow-0.d-flex.align-center
                          v-btn.mx-2.text-right(fab dark small color="gray" @click="removePlayer(player.id)")
                            v-icon mdi-minus
                    v-divider(style="margin-bottom:5px")
                    .d-flex.justify-center
                      v-btn.mx-2.text-right(fab dark color="gray" @click="addPlayer()")
                        v-icon mdi-plus   
            
          v-divider
          v-col
            v-card(raised)
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
                    v-col.text-center.flex-grow-0
                      .title Difficutly
                      .subtitle-2 {{difficultyText[difficulty]}}
                    v-col.flex-grow-1
                      v-slider(v-model="difficulty" min="0" max="3" ticks="always" tick-size="4" step="1")

                  v-row
                    v-col.text-center.flex-grow-0
                      .headline Truns
                      .subtitle-2 {{turns}}
                    v-col.flex-grow-1
                      v-slider(v-model="turns" min="5" max="100" step="5")
          v-col(align-center justify-center)
            v-row.justify-center
              //- v-col(cols="2")
              v-col.text-center
                v-btn.mx-2(raised large color="primary" :disabled="!validNames" @click="beginGame()") Begin Game


</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { Player, GameSetup } from "../types/types";
import { mapState } from 'vuex';
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
  }, created() {
    this.players = this.$store.getters.getPlayers;
    this.difficulty = this.$store.getters.getDifficulty;
    this.turns = this.$store.getters.getTurns;
  },
  computed: {
    validNames(): boolean {
      let valid = false;
      if (this.players.length > 1) {
        valid = true;
        this.players.forEach((p: Player) => {
          if (this.isEmptyOrWhiteSpace(p.name)) {
            valid = false;
          }
        });
      }
      return valid;
    },
    // Didn't work, look into it later.
    // ...mapState({
    //   players: (state: any) => state.players,
    //   difficulty: (state: any) => state.difficulty,
    //   turns: (state: any) => state.maxTurns
    // }),
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
        this.players.indexOf(this.players.filter((p: Player) => p.id == player)[0]),
        1
      );
    },
    beginGame() {
      const setup = {} as GameSetup;
      setup.players = this.players;
      setup.turns = this.turns;
      setup.difficulty = this.difficulty;
      this.$store.dispatch("setupGame", setup);
      this.$store.dispatch("resetScores");
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
