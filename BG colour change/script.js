var color = [
  "#808080",
  "#FF00FF",
  "#008000",
  "#00FFFF",
  "#ffebcd",
  "#d2691e",
  "#FF0000",
];

var i = 0;
document.querySelector("img").addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
});
