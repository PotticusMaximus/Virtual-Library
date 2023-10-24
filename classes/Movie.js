// import the Media class:
const Media = require("/Users/mpi976/Documents/Multiverse/Virtual-Library/main");
// create your Movie class:
class Movie extends Media {
  constructor(title, genre, year, director, duration) {
    super(title, genre, year);
    this.director = director;
    this.duration = duration;
  }
  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
  }
  static longestMovie(movie) {
    const sorted = movie.sort((a, b) => a.duration - b.duration);
    return sorted[0].title;
  }
}
// don't change below
module.exports = Movie;
