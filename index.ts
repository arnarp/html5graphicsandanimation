window.onload = function() {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement,
      context = canvas.getContext("2d");

  context.fillRect(10, 10, 100, 200);
};