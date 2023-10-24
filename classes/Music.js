// import the Media class:
const Media = require("/Users/mpi976/Documents/Multiverse/Virtual-Library/main");
// create your Music class:
class Music extends Media {
  constructor(title, genre, year, artist, length) {
    super(title, genre, year);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;
  }

  static shortestAlbum(album) {
    const sorted = album.sort((a, b) => a.length - b.length);
    return sorted[album.length - 1].title;
  }
}
// don't change below
module.exports = Music;
