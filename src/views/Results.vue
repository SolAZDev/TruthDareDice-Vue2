<template lang="pug">
    v-container.fill-height
        v-card.flex-grow-1(raised)
            .headline.text-center.header Results
            v-divider(style="margin:15px 20px;")
            v-simple-table.text-center
                thead
                    td.flex-grow-1 Player
                    td.flex-grow-0 Score
                tbody(v-for="player in players" :key="player.id")
                    td.flex-grow-1
                        .subtitle-1 {{player.name}}
                    td.flex-grow-0
                        .subtitle-1 {{player.score}}
        v-row.justify-center.align-center
            v-col.text-center
                v-btn(raised large :disabled="players.lenght<1" @click="resume()") Continue Game
            v-col.text-center
                v-btn(raised large :disabled="players.lenght<1" @click="restart()") Restart Game
            v-col.text-center
                v-btn(raise large @click="setup()") Back to Setup

</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({ players: 'getPlayers' })
  },
  methods: {
    resume() {
      this.$router.push('/Game');
    },
    restart() {
      this.$store.dispatch('resetScores');
      this.resume();
    },
    setup() {
      this.$router.push('/');
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  padding: 15px;
}
</style>