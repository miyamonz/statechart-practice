export function 無(put) {
  return put
}
export function 黒(flip) {
  return flip ? 白: 黒
}
export function 白(flip) {
  return flip ? 黒: 白
}

export function stoneToStr(stone) {
  switch(stone) {
    case 黒: return "黒"
    case 白: return "白"
    case 無: return "__"
  }
}
