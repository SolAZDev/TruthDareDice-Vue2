export interface Player {
  id: number;
  name: string;
  score: number;
}
export interface GameSetup {
  players: Array<Player>;
  turns: number;
  difficulty: number;
}
export interface TruthOrDareData {
  truths: Array<string>;
  daresSafe: Array<string>;
  daresSexy: Array<string>;
  daresHot: Array<string>;
  dicePlace: Array<string>;
  diceAction: Array<string>;
}
