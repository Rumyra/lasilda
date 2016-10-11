// ILDA over Audio

//
var handler;

function audioProcessor(e) {
  var il = e.inputBuffer.getChannelData(0);
  var ir = e.inputBuffer.getChannelData(1);
  var dx = e.outputBuffer.getChannelData(0);
  var dy = e.outputBuffer.getChannelData(1);
  if (handler) handler({l:il, r:ir, x:dx, y:dy});
  setTimeout(function() {
    if (canvas) preview(canvas, dx, dy);
  }, 1);
}

function startILDA() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!window.AudioContext) {
    console.log("No window.AudioContext - serial_audio disabled");
    return false;
  }
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  if (!navigator.getUserMedia) {
    console.log("No navigator.getUserMedia - serial_audio disabled");
    return false;
  }

  var userMediaStream;
  var context = new AudioContext();
  var inputNode = context.createScriptProcessor(1024, 2/*in*/, 2/*out*/);
  window.dontGarbageCollectMePlease = inputNode;
  inputNode.onaudioprocess = audioProcessor;

  navigator.getUserMedia({
    video:false,
    audio:{
      mandatory:[],
      optional:[{sampleRate:44100}]
    }
  }, function(stream) {
    userMediaStream = stream;
    var inputStream = context.createMediaStreamSource(stream);
    inputStream.connect(inputNode);
    inputNode.connect(context.destination);
  }, function(e) {
    console.log('serial_audio: getUserMedia error', e);
  });
  return true;
}
