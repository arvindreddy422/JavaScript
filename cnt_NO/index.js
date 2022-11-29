let count = 0;

document.getElementById("dec").onclick = function () {
  count -= 1;
  document.getElementById("cnt").innerHTML = count;
};
document.getElementById("inc").onclick = function () {
  count += 1;
  document.getElementById("cnt").innerHTML = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("cnt").innerHTML = count;
};
