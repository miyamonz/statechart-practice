
let state;
function 黒待ち(event) {
  state =  白待ち; return

}
function 白待ち(event) {
  state =  黒待ち; return 
}

function transitionState() {
  let newState
  while(newState = state()) {
    state = newState
  }
}

import {黒,白,無, stoneToStr} from "./stone.js"

const row = 8;
const col = 8;
export const range = num => [...Array(num)].map((_,i) => i)
let board

function init() {
  board = range(row).map( () => range(col).map( () => 無) );
  board[3][3] = board[4][4] = 黒
  board[4][3] = board[3][4] = 白

  state = 黒待ち
  render(board)

}
function render(board) {
  const tag = (name, attr) => content =>  {
    const attrs = attr 
      ?  Object.entries(attr).map(([key,val]) => `${key}="${val}"`).join(" ")
      : "";
    return `<${name} ${attrs}>${content}</${name}>`
  }

  const table = tag("table");
  const tr = tag("tr");
  const td = tag("td", {onclick:"clicked(this)"});

  const rowToStr = cols => cols.map(stoneToStr).map(td).join("")
  app.innerHTML =  table( board.map(rowToStr).map(tr).join("") )
  app.innerHTML +=  tag("span")(`state: ${state.name}`)
}
init();

function clicked (e) {
  console.log(e)
  transitionState()
  render(board)

}
window.clicked = clicked
