function superbowlWin(superbowls) {
  const wonSuperbowl = superbowls.find((game) => {
    return game.result === "W";
  });

  if (wonSuperbowl) {
    return wonSuperbowl.year;
  }
}

// function superbowlWin(superbowls) {
// const wonSuperbowl = superbowls.find((game) => {
// return game.result === "W";
// });

// if (wonSuperbowl) {
// return wonSuperbowl.year;
// }
// }

//array.find((element) => {
// return true or flase based on if this element is the elment we were trying to find
//});
