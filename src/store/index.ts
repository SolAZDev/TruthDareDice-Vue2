import Vue from "vue";
import Vuex from "vuex";
// import randomInt from "random-int";
import * as Utils from "../plugins/utils";
import { Player, GameSetup, TruthOrDareData } from "../types/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [] as Array<Player>,
    // turns: 0,
    maxTurns: 0,
    difficulty: 0,
    progressive: false,
    data: {} as TruthOrDareData,
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
        (p) => p.id == Math.round(Math.random() * state.players.length)
      )[0];
    },
    getPlayers: (state) => {
      return state.players;
    },
    getTurns: (state) => {
      return state.maxTurns;
    },
    getDifficulty: (state) => {
      return state.difficulty;
    },
    getProgressive: (state) => {
      return state.progressive;
    },
    getRandom: (state) => (max: number) => {
      return Math.round(Math.random() * max);
    },
    getTruth: (state, getters) => {
      const id = Utils.randomNumber(state.data.truths.length);
      console.log(id);
      const truth =
        state.data.truths[getters.getRandom(state.data.truths.length)];
      return truth;
    },
    getTruthArray: (state) => {
      return state.data.truths;
    },
    getDare: (state) => (level: number) => {
      let dare = "";
      switch (level) {
        case 0: //'safe'--at least for work
          dare =
            state.data.daresSafe[
              Math.round(Math.random() * state.data.daresSafe.length)
            ];
          break;
        case 1: //"Sexy"
          dare =
            state.data.daresSexy[
              Math.round(Math.random() * state.data.daresSexy.length)
            ];
          break;
        case 2: //Hot
          dare =
            state.data.daresHot[
              Math.round(Math.random() * state.data.daresHot.length)
            ];
          break;
      }
      return dare;
    },
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
      if (difficulty >= 4) {
        state.progressive = true;
      }
    },
    setNewDifficulty(state, difficulty: number) {
      state.difficulty = difficulty;
    },
    setData(state, data: TruthOrDareData) {
      state.data = data;
    },
  },

  actions: {
    setupGame(context, data: GameSetup) {
      console.log("Setting up " + data);
      context.commit("setPlayers", data.players);
      context.commit("setTurns", data.turns);
      context.commit("setDifficulty", data.difficulty);
    },
    setDifficulty(context, difficulty: number) {
      context.commit("setNewDifficulty", difficulty);
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
