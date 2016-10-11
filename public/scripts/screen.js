// Stuff for the 'screen' element - actually starts ILDA
// and handles scene change on click
var canvas;

addEventListener("DOMContentLoaded", function() {
  var screen = document.getElementById("screen");
  canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 240;
  canvas.style = "border:1px solid #000000;";
  screen.appendChild(canvas);

  // come up with the last item in the library
  handler = library[library.length-1].handler();
  // Change scene when canvas clicked
  canvas.addEventListener("mousedown", function(e) {
    var r = 0|(Math.random()*library.length);
    if (r>=library.length) r=library.length-1;
    handler = library[r].handler();
  });
  // start outputting laser patterns
  startILDA();
});
