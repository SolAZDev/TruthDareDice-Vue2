import Vue from "vue";
import Vuex from "vuex";
import { Player, GameSetup, TruthOrDareData } from "../types/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [] as Array<Player>,
    // turns: 0,
    maxTurns: 0,
    difficulty: 0,
    data: {} as TruthOrDareData,
  },
  mutations: {
    setPlayers(state, players: Array<Player>) {
      state.players = players;
    },
    scoreUp(state, playerid) {
      state.players.filter((p) => p.id == playerid)[0].score++;
    },
    setTurns(state, turns: number) {
      state.maxTurns = turns;
    },
    setDifficulty(state, difficulty: number) {
      state.difficulty = difficulty;
    },
    setData(state, data: TruthOrDareData) {
      state.data = data;
    },
  },
  getters: {
    getPlayer: (state) => (id: number) => {
      return state.players.filter((p) => p.id == id)[0];
    },
    getPlayerCount: (state) => {
      return state.players.length;
    },
    getRandomPlayer: (state) => {
      return state.players.filter(
        (p) => p.id == Math.random() * state.players.length
      )[0];
    },
    getTurns: (state) => {
      return state.maxTurns;
    },
    getDifficulty: (state) => {
      return state.difficulty;
    },
    getTruth: (state) => {
      return state.data.truths[Math.random() * state.data.truths.length];
    },
    getDare: (state) => (level: number) => {
      let dare = "";
      switch (level) {
      }
    },
  },
  actions: {
    setupGame(context, data: GameSetup) {
      console.log("Setting up " + data);
      context.commit("setPlayers", data.players);
      context.commit("setTurns", data.turns);
      context.commit("setDifficulty", data.difficulty);
    },
    scoreUp(context, playerid: number) {
      context.commit("scoreUp", playerid);
    },
    setGameData(context, data: TruthOrDareData) {
      context.commit("setData", data);
    },
  },
  modules: {},
});
