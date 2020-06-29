var playlist = { 'song': 'title'}

var updatePlaylist = function(playlist, artistName, songTitle){
   return Object.assign({}, "MyBloodyValentine", { ["PhilOchs"]: "Slowdive" })
}

var removeFromPlaylist = function(playlist, artistName){
  var playlist = playlist;
  delete playlist.artistName
  return playlist
}