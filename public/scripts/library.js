var library = [
  {
    "name" : "Circle wave",
    "handler" : function() {
      return function(e) {
        for (var i=0;i<e.x.length;i++) {
          var s = (e.l[i]+e.r[i])/2;
          var a = Math.PI*i*2 / e.x.length;
          e.x[i] = Math.sin(a*2)*(1+s)/2;
          e.y[i] = Math.cos(a*2)*(1+s)/2;
        }
      }
    }
  },
  {
    "name" : "Twisty thing",
    "handler" : function() {
      var px = 0;
      var py = 0;
      return function(e) {
        for (var i=0;i<e.x.length;i++) {
          e.x[i] = Math.sin(px);
          e.y[i] = Math.cos(py);
          px += (1.2+Math.sin(px/3987))/50;
          py += (1.2+Math.cos(py/4000))/50;
        }
      }
    }
  },
  {
    "name" : "Line wave",
    "handler" : function() {
      var ang = 0;
      return function(e) {
        ang += 0.1;
        var dx = Math.cos(ang);
        var dy = Math.sin(ang);
        var ex = -dy;
        var ey = dx;
        var l = e.x.length;
        for (var i=0;i<l;i++) {
          var n = (((i>=(l/2)) ? (l-i) : i) * 4 / l) - 1;
          var s = e.l[i]+e.r[i];
          e.x[i] = dx*n + ex*s;
          e.y[i] = dy*n + ey*s;
        }
      }
    }
  },
  {
    "name" : "Line wave",
    "handler" : function() {
      var ang = 0;
      var b = [];
      for (var i=0;i<8;i++) {
        var r = Math.random()*Math.PI*2;
        var s = 1+Math.random();
        b.push({
          x : 1.5*(Math.random()-0.5),
          y : 1.5*(Math.random()-0.5),
          dx : Math.cos(r)*s,
          dy : Math.sin(r)*s,
          s : (Math.random()+1)/5
        });
      }
      return function(e) {
        var p = 0;
        var l = e.x.length / b.length;
        var d = 0.01;
        b.forEach(function(s) {
          s.x += s.dx*d;
          s.y += s.dy*d;
          if (s.x+s.s>1) s.dx=-Math.abs(s.dx);
          if (s.x-s.s<-1) s.dx=Math.abs(s.dx);
          if (s.y+s.s>1) s.dy=-Math.abs(s.dy);
          if (s.y-s.s<-1) s.dy=Math.abs(s.dy);
          for (var i=0;i<l;i++) {
            var a = Math.PI*i*2 / l;
            e.x[p] = Math.cos(a)*s.s + s.x;
            e.y[p] = Math.sin(a)*s.s + s.y;
            p++;
          }
        });
      }
    }
  },
];
