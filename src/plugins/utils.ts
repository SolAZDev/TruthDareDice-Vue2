//Utils
export function randomNumber(maxNum: number) {
  const res = Math.floor(Math.random() * maxNum);
  return res;
}
export function randomAvoidNumber(maxNum: number, avoid: number) {
  let diffNum = false;
  let Num = -1;
  while (!diffNum) {
    Num = randomNumber(maxNum);
    diffNum = Num != avoid;
  }
  return Num;
}
