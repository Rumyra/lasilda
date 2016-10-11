// Tools for previewing laser patterns

function preview(canvas,dx,dy) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.strokeStyle = "#3FFF3F";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (dx.length==0) return;
  ctx.beginPath();
  ctx.moveTo((dx[0]+1)*canvas.width/2, (dy[0]+1)*canvas.height/2);
  for (var i=1;i<dx.length;i++)
    ctx.lineTo((dx[i]+1)*canvas.width/2, (dy[i]+1)*canvas.height/2);
  ctx.stroke();
}
