function winin() {
  var a = Math.ceil(Math.random() * 6);
  document.getElementById("on").setAttribute("src", `shr${a}.jpg`);

  var b = Math.ceil(Math.random() * 6);
  document.getElementById("to").setAttribute("src", `shr${b}.jpg`);

  if (a > b) {
    document.getElementById("win").innerHTML = "Player 1 Win The Game";
  } else if (a < b) {
    document.getElementById("win").innerHTML = "Player 2 Win The Game ";
  } else if (a == b) {
    document.getElementById("win").innerHTML = "Match Draw ";
  }
}
