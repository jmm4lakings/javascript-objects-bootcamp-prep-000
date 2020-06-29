
var playlist = new Object ({});

var updatedPlaylist = function(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
};