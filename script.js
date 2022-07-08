let numberOfFilms = +prompt(`How much film do you watched?`, ``);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i=0; i<2; i++) {
   let  lastWatchedFilm = prompt(`What film do you watched last?`, ``);
   let  ratingThisFilm = prompt(`What is your rating of this film?`, ``);
   if (lastWatchedFilm != null && ratingThisFilm !=null && lastWatchedFilm != '' && ratingThisFilm != '' && lastWatchedFilm.length<50){
    personalMovieDB.movies[lastWatchedFilm] = ratingThisFilm;
   } else{
    i--;
   }
}

console.log(personalMovieDB)

